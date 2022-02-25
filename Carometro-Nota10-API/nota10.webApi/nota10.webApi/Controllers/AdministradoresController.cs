using Microsoft.AspNetCore.Mvc;
using nota10.webApi.Domains;
using nota10.webApi.Repositories;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace nota10.webApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class AdministradoresController : ControllerBase
    {
        private AdministradorRepository _administradorRepository { get; set; }

        public AdministradoresController()
        {
            _administradorRepository = new AdministradorRepository();
        }

        [HttpPost("CadastrarAluno")]
        public IActionResult CadastrarAluno(Aluno novaAluno)
        {
            try
            {

                if (novaAluno == null)
                {
                    return BadRequest(new
                    {
                        Mensagem = "Os valores inseridos são inválidos"
                    });
                }
                _administradorRepository.CadastrarAluno(novaAluno);

                return StatusCode(201, new
                {
                    Mensagem = "Aluno foi cadastrada",
                    novaAluno
                });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
           }

        }

        [HttpPost("CadastrarSala")]
        public IActionResult CadastrarSala(Sala novaSala)
        {
            try
            {

                if (novaSala == null)
                {
                    return BadRequest(new
                    {
                        Mensagem = "Os valores inseridos são inválidos"
                    });
                }
                _administradorRepository.CadastrarSala(novaSala);

                return StatusCode(201, new
                {
                    Mensagem = "Sala foi cadastrada",
                    novaSala
                });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }

        

    }
}
