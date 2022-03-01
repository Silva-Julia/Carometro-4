using nota10.webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nota10.webApi.Interfaces
{
    public interface IUsuarioRepository
    {
        /// <summary>
        /// Efetua o login
        /// </summary>
        /// <param name="email">email do usuario</param>
        /// <param name="senha">senha do usuario</param>
        /// <returns>token do usuário</returns>
       Usuario Login(string email, string senha);
    }
}
