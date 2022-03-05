using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using nota10.webApi.Domains;
using nota10.webApi.Interfaces;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace nota10.webApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProfessoresController : ControllerBase
    {
        private readonly IProfessorRepository _professorRepository;

        public ProfessoresController(IProfessorRepository repo)
        {
            _professorRepository = repo;
        }
        [HttpGet("Buscar")]
        public IActionResult ListarProfessores()
        {
            try
            {
                return Ok(_professorRepository.ListarProfessores());
            }
            catch (Exception execp)
            {

                return BadRequest(execp);

            }
        }

        // POST api/<ProfessoresController>
        [Authorize(Roles = "2")]
        [HttpPost("Cadastrar")]
        public IActionResult CadastrarProfessor(Professor novoProfessor)
        {
            try
            {
                if (novoProfessor != null)
                {
                    _professorRepository.CadastrarProfessor(novoProfessor);
                    return StatusCode(201);
                }

                return BadRequest(new {mensagem = "Professor não pode estar vazio" });
            }
            catch (Exception excep)
            {
                return BadRequest(excep);
            }   
        }
    }
}
