using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nota10.webApi.ViewModels
{
    public class AlunoViewModel
    {
        public short IdAluno { get; set; }
        public short? IdSala { get; set; }
        public string NomeAluno { get; set; }
        public string Rm { get; set; }
        public string Telefone { get; set; }
        public IFormFile FotoDePerfil { get; set; }
        public bool Situacao { get; set; }
    }
}
