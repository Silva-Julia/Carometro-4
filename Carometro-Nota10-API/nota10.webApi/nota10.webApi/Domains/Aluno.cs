using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace nota10.webApi.Domains
{
    public partial class Aluno
    {
        public short IdAluno { get; set; }

        [Required]
        public short? IdSala { get; set; }
        
        public string NomeAluno { get; set; }
        
        [Required]
        public string Rm { get; set; }
        public string Telefone { get; set; }

        [Required]
        public string FotoDoPerfil { get; set; }
        public bool? Situacao { get; set; }

        public virtual Sala IdSalaNavigation { get; set; }
    }
}
