using System;
using System.Collections.Generic;

#nullable disable

namespace nota10.webApi.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Admistradors = new HashSet<Admistrador>();
            Professors = new HashSet<Professor>();
        }

        public short IdUsuario { get; set; }
        public short? IdTipoUsuario { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string NomeUsuario { get; set; }
        public string FotoUsuario { get; set; }

        public virtual TipoUsuario IdTipoUsuarioNavigation { get; set; }
        public virtual ICollection<Admistrador> Admistradors { get; set; }
        public virtual ICollection<Professor> Professors { get; set; }
    }
}
