using nota10.webApi.Contexts;
using nota10.webApi.Domains;
using nota10.webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nota10.webApi.Repositories
{
    public class AdministradorRepository : IAdministradorRepository
    {
        Nota10Context ctx = new Nota10Context();

        public void AtualizarAluno(int idAluno)
        {
            throw new NotImplementedException();
        }

        public Aluno BuscarAluno(int id)
        {
            throw new NotImplementedException();
        }

        public void CadastrarAluno(Aluno novaAluno)
        {
            ctx.Alunos.Add(novaAluno);

            ctx.SaveChanges();
        }

        public void CadastrarSala(Sala novaSala)
        {
            ctx.Salas.Add(novaSala);

            ctx.SaveChanges();
        }

        public void DeletarAluno(int idAluno)
        {
            throw new NotImplementedException();
        }

        public List<Aluno> ListarAluno()
        {
            throw new NotImplementedException();
        }

        public List<Sala> ListarTodasSala()
        {
            throw new NotImplementedException();
        }
    }
}
