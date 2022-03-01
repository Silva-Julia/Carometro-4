using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;

#nullable disable

namespace nota10.webApi.Domains
{
    public partial class Aluno
    {
        public short IdAluno { get; set; }
        public short? IdSala { get; set; }
        public string NomeAluno { get; set; }
        public string Rm { get; set; }
        public string Telefone { get; set; }
        public string FotoDoPerfil { get; set; }
        public string Situacao { get; set; }

        public virtual Sala IdSalaNavigation { get; set; }
    }
}
