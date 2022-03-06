using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace nota10.webApi.ViewModels
{
    public class AlunoFotoViewModel
    {
        [Required]
        public short IdAluno { get; set; }

        [Required]
        public IFormFile FotoDePerfil { get; set; }

    }
}
