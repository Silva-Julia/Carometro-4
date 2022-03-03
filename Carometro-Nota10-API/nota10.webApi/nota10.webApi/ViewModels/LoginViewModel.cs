using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace nota10.webApi.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Informe o Email e senha !")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Informe o Email e a senha !")]
        [StringLength(10,MinimumLength = 4)]
        public string Senha { get; set; }
    }
}
