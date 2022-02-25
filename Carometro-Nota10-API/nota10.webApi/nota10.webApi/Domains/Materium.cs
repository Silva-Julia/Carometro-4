using System;
using System.Collections.Generic;

#nullable disable

namespace nota10.webApi.Domains
{
    public partial class Materium
    {
        public Materium()
        {
            Professors = new HashSet<Professor>();
        }

        public short IdMateria { get; set; }
        public string NomeMateria { get; set; }

        public virtual ICollection<Professor> Professors { get; set; }
    }
}
