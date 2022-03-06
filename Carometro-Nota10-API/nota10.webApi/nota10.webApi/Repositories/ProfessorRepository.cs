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

        public List<Professor> ListarProfessores()
        {
            return nota10Context.Professors
            .Select(p => new Professor
            {

                IdProfessor = p.IdProfessor,
                IdMateria = p.IdMateria,
                Cfpe = p.Cfpe,
                IdMateriaNavigation = new Materium
                {
                    IdMateria = p.IdMateriaNavigation.IdMateria
                },
                IdUsuarioNavigation = new Usuario
                {
                    IdUsuario = p.IdUsuarioNavigation.IdUsuario,
                    NomeUsuario = p.IdUsuarioNavigation.NomeUsuario,
                    FotoUsuario = p.IdUsuarioNavigation.FotoUsuario
                }

            }).ToList();
        }
    }
}
