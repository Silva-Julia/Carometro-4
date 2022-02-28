﻿using Microsoft.AspNetCore.Mvc;
using nota10.webApi.Contexts;
using nota10.webApi.Domains;
using nota10.webApi.Interfaces;
using nota10.webApi.Repositories;
using nota10.webApi.ViewModels;
using System;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace nota10.webApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class AlunosController : ControllerBase
    {
        private readonly IAlunoRepository _AlunoRepository;

        public AlunosController(IAlunoRepository repo)
        {
            _AlunoRepository = repo;
        }



        // GET: api/<ValuesController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ValuesController>
        [HttpPost("Cadastrar")]
        public IActionResult CadastrarAluno([FromForm] AlunoViewModel alunoViewModel)
        {
            try
            {
                if(alunoViewModel.FotoDePerfil.Length > 50000) {
                    return BadRequest(new { mensagem = "A imagem deve ter no máximo 5mb !" });
                }

                string extensao = alunoViewModel.FotoDePerfil.ContentType.Split('/')[1];

                if(extensao != "png" && extensao != "jpeg")
                {
                    return BadRequest(new {mensagem = "Apenas png e jpeg são permitidos !" });
                }

                _AlunoRepository.CadastrarAluno(alunoViewModel);
                return StatusCode(201);
                
            }
            catch (Exception execp)
            {

                return BadRequest(execp);
            }
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
