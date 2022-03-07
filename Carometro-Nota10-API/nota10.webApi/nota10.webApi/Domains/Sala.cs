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
<<<<<<< HEAD
        public bool? Periodo { get; set; }
=======
>>>>>>> 3488f730b9b3dbd837bee21dc873aa0b7c45b298

        public virtual Professor IdProfessorNavigation { get; set; }
        public virtual ICollection<Aluno> Alunos { get; set; }
    }
}
