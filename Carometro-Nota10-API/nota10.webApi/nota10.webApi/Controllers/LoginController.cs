using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using nota10.webApi.Domains;
using nota10.webApi.Interfaces;
using nota10.webApi.ViewModels;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Security.Claims;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace nota10.webApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public LoginController(IUsuarioRepository repo)
        {
            _usuarioRepository = repo;
        }

        public BinaryReader JwtRegistered { get; private set; }

        [HttpPost]
        public IActionResult Login( LoginViewModel login )
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.Login(login.Email, login.Senha);

                if (usuarioBuscado == null)
                {
                    return Unauthorized(new { msg = "Email ou senha inválidos" });
                }

                var minhasClaims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario.ToString()),
                    new Claim(ClaimTypes.Role, usuarioBuscado.IdTipoUsuario.ToString()),
                    new Claim("nome", usuarioBuscado.NomeUsuario),
                    new Claim("role",  usuarioBuscado.IdTipoUsuario.ToString())

                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("ASDFÇAJSÇDF-LAJSDFJAÇKFD-ADJFKAJÇKSDFJ"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var meuToken = new JwtSecurityToken(

                    issuer: "nota10.webApi",
                    audience: "nota10.webApi",
                    claims: minhasClaims,
                    expires :  DateTime.Now.AddMinutes(30),
                    signingCredentials : creds 
                );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(meuToken)
                }
                );
            }
            catch (Exception excp)
            {

                return BadRequest(excp);
            }
        }

    }
}
