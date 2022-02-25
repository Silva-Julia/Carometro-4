using System;
using System.Collections.Generic;

#nullable disable

namespace nota10.webApi.Domains
{
    public partial class TipoUsuario
    {
        public TipoUsuario()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public short IdTipoUsuario { get; set; }
        public string NomeTipoUser { get; set; }

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
