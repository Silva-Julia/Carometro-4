using System;
using System.Collections.Generic;

#nullable disable

namespace nota10.webApi.Domains
{
    public partial class Professor
    {
        public Professor()
        {
            Salas = new HashSet<Sala>();
        }

        public short IdProfessor { get; set; }
        public short? IdUsuario { get; set; }
        public short? IdMateria { get; set; }
        public string Cfpe { get; set; }

        public virtual Materium IdMateriaNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Sala> Salas { get; set; }
    }
}
