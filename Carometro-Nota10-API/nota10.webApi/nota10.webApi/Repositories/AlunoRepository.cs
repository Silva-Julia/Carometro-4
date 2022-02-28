﻿using Microsoft.AspNetCore.Http;
using nota10.webApi.Contexts;
using nota10.webApi.Domains;
using nota10.webApi.Interfaces;
using nota10.webApi.Utils;
using nota10.webApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nota10.webApi.Repositories
{
    public class AlunoRepository : IAlunoRepository
    {

        private readonly Nota10Context nota10Context;

        public AlunoRepository(Nota10Context appContext)
        {
            nota10Context = appContext;
        }

        public Array BuscarAlunoPeloNome(string nomeAluno)
        {

            return nota10Context.Alunos
                 .Where(a => a.NomeAluno == nomeAluno)
                 .Select(a => new Aluno
                 {

                     IdAluno = a.IdAluno,
                     NomeAluno = a.NomeAluno,
                     FotoDoPerfil = a.FotoDoPerfil,
                     Rm = a.Rm,
                     Situacao = a.Situacao,
                     Telefone = a.Telefone,

                 }).ToArray();
        }

        public void CadastrarAluno(AlunoViewModel alunoViewModel)
        {
            Aluno novoAluno = new Aluno()
            {
                FotoDoPerfil = ImagemParaBase64.TransFormarImagemBase64(alunoViewModel.FotoDePerfil),
                IdAluno = alunoViewModel.IdAluno,
                IdSala = alunoViewModel.IdSala,
                NomeAluno = alunoViewModel.NomeAluno,
                Rm = alunoViewModel.Rm,
                Situacao = alunoViewModel.Situacao,
                Telefone = alunoViewModel.Telefone
            };

            nota10Context.Add(novoAluno);

            nota10Context.SaveChanges();
        }

        public void EditarFotoDoAluno(int idAluno, IFormFile foto)
        {
            Aluno alunoAchado = nota10Context.Alunos.FirstOrDefault(a => a.IdAluno == idAluno);

            if (alunoAchado != null)
            {
                alunoAchado.FotoDoPerfil = ImagemParaBase64.TransFormarImagemBase64(foto);

                nota10Context.Update(alunoAchado);

                nota10Context.SaveChanges();
            }
        }

        public void ExcluirAluno(int idAluno)
        {
            Aluno alunoAchado = nota10Context.Alunos.FirstOrDefault(a => a.IdAluno == idAluno);

            if (alunoAchado != null)
            {
                nota10Context.Remove(alunoAchado);

                nota10Context.SaveChanges();
            }

        }

        public List<Aluno> ListarAlunos()
        {
            return nota10Context.Alunos
            .Select(a => new Aluno
            {

                IdAluno = a.IdAluno,
                NomeAluno = a.NomeAluno,
                FotoDoPerfil = a.FotoDoPerfil,
                Rm = a.Rm,
                Situacao = a.Situacao,
                Telefone = a.Telefone,

            }).ToList();
        }

        public void MudarAlunoDeSala(int idAluno, int idSala)
        {
            Aluno alunoAchado = nota10Context.Alunos.FirstOrDefault(a => a.IdAluno == idAluno);

            if (alunoAchado != null)
            {
                alunoAchado.IdSala = Convert.ToInt16(idSala);

                nota10Context.Update(alunoAchado);

                nota10Context.SaveChanges();
            }
        }
    }
}
