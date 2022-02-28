using nota10.webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nota10.webApi.Interfaces
{
    interface IAlunoRepository
    {
        void CadastrarAluno(Aluno novoAluno);
    }
}
