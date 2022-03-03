using nota10.webApi.Contexts;
using nota10.webApi.Domains;
using nota10.webApi.Interfaces;
using nota10.webApi.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nota10.webApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly Nota10Context nota10Context;

        public UsuarioRepository(Nota10Context appContext)
        {
            nota10Context = appContext;
        }

        public Usuario Login(string email, string senha)
        {
            var usuario = nota10Context.Usuarios.FirstOrDefault(u => u.Email == email);

            if (usuario.Senha.Length < 32 && usuario.Senha[0] != '$')
            {
                AtualizarSenha(usuario.IdUsuario, usuario.Senha);
            }

            if (usuario != null)
            {
                bool confere = Criptografia.CompararSenha(senha, usuario.Senha);
                if (confere)
                    return usuario;
            }

            return null;
        }

        public void AtualizarSenha(int idUsuario, string senha)
        {
            var usuario = nota10Context.Usuarios.FirstOrDefault(u => u.IdUsuario == idUsuario);

            usuario.Senha = Criptografia.GerarHash(senha);

            nota10Context.Usuarios.Update(usuario);

            nota10Context.SaveChanges();

        }
    }
}
