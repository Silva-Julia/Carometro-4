using Microsoft.AspNetCore.Http;
using nota10.webApi.Domains;
using nota10.webApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nota10.webApi.Interfaces
{
    public interface IAlunoRepository
    {
        /// <summary>
        /// Cadastrar um aluno
        /// </summary>
        /// <param name="novoaAluno">Objeto com os dados do novo aluno</param>
        void CadastrarAluno(AlunoViewModel novoaAluno);

        /// <summary>
        /// Exclui um aluno
        /// </summary>
        /// <param name="idAluno">Id aluno que será excluido</param>
        void ExcluirAluno(int idAluno);

        /// <summary>
        /// Atualiza a foto do aluno
        /// </summary>
        /// <param name="AlunoAtualizado">Objeto com a nova foto do aluno</param>
        void EditarFotoDoAluno(int idAluno,IFormFile fotoAluno);

        /// <summary>
        /// Atualiza a sala na qual o aluno se encontra
        /// </summary>
        /// <param name="idAluno"></param>
        /// <param name="idSala"></param>
        void MudarAlunoDeSala(int idAluno, int idSala);

        /// <summary>
        /// Lista todos os alunos
        /// </summary>
        /// <returns>Uma lista de alunos</returns>
        List<Aluno> ListarAlunos();

        /// <summary>
        /// Procura um aluno pelo nome
        /// </summary>
        /// <param name="idAluno"></param>
        /// <returns>Retorna um array de alunos</returns>
        Array BuscarAlunoPeloNome(string nomeAluno);

        Aluno BuscarPorFoto(string fotoAluno);


    }
}
