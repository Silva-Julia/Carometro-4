using nota10.webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nota10.webApi.Interfaces
{
    interface IAdministradorRepository
    {
        List<Sala> ListarTodasSala();
        List<Aluno> ListarAluno();
        void CadastrarSala(Sala novaSala);
        void CadastrarAluno(Aluno novaAluno);
        void AtualizarAluno(int idAluno);
        void DeletarAluno(int idAluno);
        Aluno BuscarAluno(int id);

    }
}
