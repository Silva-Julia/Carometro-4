using nota10.webApi.Contexts;
using nota10.webApi.Domains;
using nota10.webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nota10.webApi.Repositories
{
    public class ProfessorRepository : IProfessorRepository
    {
        private readonly Nota10Context nota10Context;

        public ProfessorRepository(Nota10Context appContext)
        {
            nota10Context = appContext;
        }

        public void CadastrarProfessor(Professor novoProfessor)
        {
            nota10Context.Professors.Add(novoProfessor);

            nota10Context.SaveChanges();
        }
    }
}
