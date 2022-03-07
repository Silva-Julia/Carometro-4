using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using nota10.webApi.Contexts;
using nota10.webApi.Domains;
using nota10.webApi.Interfaces;
using nota10.webApi.Repositories;
using nota10.webApi.ViewModels;
using System;
using System.Linq;
using System.Threading.Tasks;

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

        [HttpGet("Buscar")]
        public IActionResult ListarAlunos()
        {
            try
            {
                 return Ok(_AlunoRepository.ListarAlunos());
            }
            catch (Exception execp)
            {

                return BadRequest(execp);

            }
        }
        
        [HttpGet("Buscar/{nome}")]
        public IActionResult BuscarAlunoPeloNome(string nome)
        {
            try
            {
                if (nome != null)
                {
                   return Ok(_AlunoRepository.BuscarAlunoPeloNome(nome));
                }

                return BadRequest(new { mensagem = "O nome do aluno está vazio !"});
            }
            catch (Exception execp)
            {

                return BadRequest(execp);
            }
        }

        [HttpGet("BuscarFoto/{fotoPerfil}")]
        [Authorize]
        public IActionResult BuscarPorFoto(string idFoto)
        {
            try
            {
                Aluno alunoConsulta = _AlunoRepository.BuscarPorFoto(idFoto);

                if (alunoConsulta != null)
                {
                    return Ok(alunoConsulta);
                }
                else return NotFound("Imagem não reconhecida");
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
                throw;
            }
        }

        // POST api/<ValuesController>
        [HttpPost("Cadastrar")]

        public IActionResult CadastrarAluno([FromForm] AlunoViewModel alunoViewModel)
        {
            try
            {
                if (alunoViewModel.FotoDePerfil.Length > 1505888)
                {
                    return BadRequest(new { mensagem = "A imagem deve ter no máximo 5mb !" });
                }

                string extensao = alunoViewModel.FotoDePerfil.ContentType.Split('/')[1];

                if (extensao != "png" && extensao != "jpeg")
                {
                    return BadRequest(new { mensagem = "Apenas png e jpeg são permitidos !" });
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
        [Authorize(Roles = "1")]
        [HttpPut("Atualizar/Foto/{idAluno}")]
        public IActionResult EditarFotoDoAluno(int idAluno,[FromForm]IFormFile alunoFoto)
        {
            try
            {
                if (alunoFoto != null && !(idAluno == 0))
                {
                    _AlunoRepository.EditarFotoDoAluno( idAluno, alunoFoto);
                    return StatusCode(200);
                }

                return BadRequest(new { mensagem = "Uma foto deve ser colocada." });
            }
            catch (Exception execp)
            {
                return BadRequest(execp);
            }
        }

        // DELETE api/<ValuesController>/5
        [Authorize(Roles = "1")]
        [HttpDelete("Excluir/{id}")]
        public IActionResult ExcluirAluno(int id)
        {
            try
            {
                if (id != 0)
                {
                    _AlunoRepository.ExcluirAluno(id);
                    return StatusCode(204);
                }

                return NotFound();
            }
            catch (Exception execp)
            {
               return BadRequest(execp);
            }
        }

        [Authorize(Roles = "1")]
        [HttpPut("Atualizar/Sala/{idAluno}/{idSala}")]
        public IActionResult AtualizarSalaDoAluno(int idAluno, int idSala)
        {
            try
            {
                if (idAluno != 0)
                {
                    _AlunoRepository.MudarAlunoDeSala(idAluno, idSala);
                    return StatusCode(200);
                }

                return NotFound(new { mensagem = "O Id do Aluno e da Sala não podem estar vazios !"});
            }
            catch (Exception execp)
            {
                return BadRequest(execp);
            }
        }
    }
}