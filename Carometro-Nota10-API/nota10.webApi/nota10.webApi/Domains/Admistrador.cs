using System;
using System.Collections.Generic;

#nullable disable

namespace nota10.webApi.Domains
{
    public partial class Admistrador
    {
        public Admistrador()
        {
            Salas = new HashSet<Sala>();
        }

        public short IdAdministrador { get; set; }
        public short? IdUsuario { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Sala> Salas { get; set; }
    }
}
