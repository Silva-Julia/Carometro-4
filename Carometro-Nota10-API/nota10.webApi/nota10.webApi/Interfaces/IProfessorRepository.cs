using nota10.webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nota10.webApi.Interfaces
{
    public interface IProfessorRepository
    {
        /// <summary>
        /// Cadastra um novo professor
        /// </summary>
        /// <param name="novoProfessor">objeto com os dados do novo professor</param>
        void CadastrarProfessor(Professor novoProfessor);
    }
}
