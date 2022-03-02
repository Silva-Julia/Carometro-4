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
    }
}
