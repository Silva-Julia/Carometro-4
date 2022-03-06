using nota10.webApi.Contexts;
using nota10.webApi.Domains;
using nota10.webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nota10.webApi.Repositories
{
    public class SalaRepository : ISalaRepository
    {
        private readonly Nota10Context nota10Context;

        public SalaRepository(Nota10Context appContext)
        {
            nota10Context = appContext;
        }

        public void CriarSala(Sala novaSala)
        {
            nota10Context.Salas.Add(novaSala);

            nota10Context.SaveChanges();
        }

        public List<Sala> ListarSalas()
        {
            return nota10Context.Salas
                .Select(
                s =>  new Sala
                {
                    NomeSala = s.NomeSala,
                    IdProfessor = s.IdProfessor,
                    IdSala = s.IdSala,
                    NumeroSala = s.NumeroSala,
                    IdProfessorNavigation = new Professor 
                    {
                       IdProfessor = s.IdProfessorNavigation.IdProfessor,
                       IdUsuarioNavigation = new Usuario
                       {
                           IdUsuario = s.IdProfessorNavigation.IdUsuarioNavigation.IdUsuario,
                           NomeUsuario = s.IdProfessorNavigation.IdUsuarioNavigation.NomeUsuario
                       },
                       IdMateriaNavigation = new Materium
                       { 
                           NomeMateria = s.IdProfessorNavigation.IdMateriaNavigation.NomeMateria
                       }
                    }
                }
                ).ToList();
        }
    }
}
