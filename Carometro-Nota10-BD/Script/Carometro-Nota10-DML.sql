USE Carometro_Nota10;
GO

INSERT INTO TIPO_USUARIO(nomeTipoUser)
VALUES ('Administrador'), ('Professor')
GO

INSERT INTO USUARIO(idTipoUsuario, email, senha, nomeUsuario, fotoUsuario)
VALUES (1, 'enzzo@email.com', '1234', 'Enzzo', 'foto'), (1, 'vinicius@email.com', '4321', 'Vinicius', 'foto'),
(2, 'saulo@email.com', '9876', 'Saulo', 'foto'), (2, 'paulo@email.com', '6789', 'Paulo', 'foto')
GO

INSERT INTO MATERIA(nomeMateria)
VALUES ('React'), ('API')
GO

INSERT INTO PROFESSOR(idUsuario, idMateria, cfpe)
VALUES (3, 1, '11111111111'), (4, 2, '22222222222')
GO

INSERT INTO ADMISTRADOR(idUsuario)
VALUES (1), (2)
GO

INSERT INTO SALA(idProfessor, idAdministrador, nomeSala, numeroSala)
VALUES (1, 1, '2�', 'Sala 12'), (2, 2, '3�', 'Sala 17')
GO

INSERT INTO ALUNO(idSala, nomeAluno, rm, telefone, fotoDoPerfil, situacao)
VALUES (1, 'Raul', '1111', '11999999999', 'foto', 'aprovado'), (2, 'Julia', '2222', '11988888888', 'foto', 'aprovado')
GO