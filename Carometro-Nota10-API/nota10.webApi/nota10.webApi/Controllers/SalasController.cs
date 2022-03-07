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
    public class SalasController : ControllerBase
    {
        private readonly ISalaRepository _salaRepository;

        public SalasController(ISalaRepository repo)
        {
            _salaRepository = repo;
        }

        // GET api/<SalasController>/5
        [HttpGet("Listar")]
        public IActionResult ListarSalas()
        {
            try
            {
                return Ok(_salaRepository.ListarSalas());
            }
            catch (Exception excep)
            {
                return BadRequest(excep);
            }
        }

        // POST api/<SalasController>

        [HttpPost("Cadastrar")]
        public IActionResult CadastrarSala(Sala novaSala)
        {
            try
            {
                if (novaSala != null)
                {
                    _salaRepository.CriarSala(novaSala);
                    return StatusCode(201);
                }

                return BadRequest(new { mensagem = "Todos os campos de sala devem estar preenchidos !" });
            }
            catch (Exception excep)
            {
                return BadRequest(excep);
            }
        }
    }
}
