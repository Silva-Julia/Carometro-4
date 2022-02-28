using System;
using System.Collections.Generic;

#nullable disable

namespace nota10.webApi.Domains
{
    public partial class Sala
    {
        public Sala()
        {
            Alunos = new HashSet<Aluno>();
        }

        public short IdSala { get; set; }
        public short? IdProfessor { get; set; }
        public string NomeSala { get; set; }
        public string NumeroSala { get; set; }

        public virtual Professor IdProfessorNavigation { get; set; }
        public virtual ICollection<Aluno> Alunos { get; set; }
    }
}
