using nota10.webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nota10.webApi.Interfaces
{
    public interface ISalaRepository
    {
        /// <summary>
        /// Cria um nova sala
        /// </summary>
        /// <param name="novaSala">Objeto com o nome da sala e com a lista de alunos</param>
        void CriarSala(Sala novaSala);

        /// <summary>
        /// Lista todas as salas
        /// </summary>
        /// <returns>Uma lista de salas</returns>
        List<Sala> ListarSalas();

    }
}
