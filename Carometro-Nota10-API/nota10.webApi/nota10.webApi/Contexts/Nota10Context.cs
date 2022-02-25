using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using nota10.webApi.Domains;

#nullable disable

namespace nota10.webApi.Contexts
{
    public partial class Nota10Context : DbContext
    {
        public Nota10Context()
        {
        }

        public Nota10Context(DbContextOptions<Nota10Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Admistrador> Admistradors { get; set; }
        public virtual DbSet<Aluno> Alunos { get; set; }
        public virtual DbSet<Materium> Materia { get; set; }
        public virtual DbSet<Professor> Professors { get; set; }
        public virtual DbSet<Sala> Salas { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuarios { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("name=Default");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Admistrador>(entity =>
            {
                entity.HasKey(e => e.IdAdministrador)
                    .HasName("PK__ADMISTRA__EBE80EA137841202");

                entity.ToTable("ADMISTRADOR");

                entity.Property(e => e.IdAdministrador).HasColumnName("idAdministrador");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Admistradors)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__ADMISTRAD__idUsu__300424B4");
            });

            modelBuilder.Entity<Aluno>(entity =>
            {
                entity.HasKey(e => e.IdAluno)
                    .HasName("PK__ALUNO__0C5BC849EC97DB92");

                entity.ToTable("ALUNO");

                entity.Property(e => e.IdAluno).HasColumnName("idAluno");

                entity.Property(e => e.FotoDoPerfil)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("fotoDoPerfil");

                entity.Property(e => e.IdSala).HasColumnName("idSala");

                entity.Property(e => e.NomeAluno)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nomeAluno");

                entity.Property(e => e.Rm)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("rm");

                entity.Property(e => e.Situacao)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("situacao");

                entity.Property(e => e.Telefone)
                    .HasMaxLength(11)
                    .IsUnicode(false)
                    .HasColumnName("telefone");

                entity.HasOne(d => d.IdSalaNavigation)
                    .WithMany(p => p.Alunos)
                    .HasForeignKey(d => d.IdSala)
                    .HasConstraintName("FK__ALUNO__idSala__36B12243");
            });

            modelBuilder.Entity<Materium>(entity =>
            {
                entity.HasKey(e => e.IdMateria)
                    .HasName("PK__MATERIA__4B740AB387B91421");

                entity.ToTable("MATERIA");

                entity.Property(e => e.IdMateria).HasColumnName("idMateria");

                entity.Property(e => e.NomeMateria)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("nomeMateria");
            });

            modelBuilder.Entity<Professor>(entity =>
            {
                entity.HasKey(e => e.IdProfessor)
                    .HasName("PK__PROFESSO__4E7C3C6DA272F2AE");

                entity.ToTable("PROFESSOR");

                entity.Property(e => e.IdProfessor).HasColumnName("idProfessor");

                entity.Property(e => e.Cfpe)
                    .HasMaxLength(11)
                    .IsUnicode(false)
                    .HasColumnName("cfpe")
                    .IsFixedLength(true);

                entity.Property(e => e.IdMateria).HasColumnName("idMateria");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.HasOne(d => d.IdMateriaNavigation)
                    .WithMany(p => p.Professors)
                    .HasForeignKey(d => d.IdMateria)
                    .HasConstraintName("FK__PROFESSOR__idMat__2D27B809");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Professors)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__PROFESSOR__idUsu__2C3393D0");
            });

            modelBuilder.Entity<Sala>(entity =>
            {
                entity.HasKey(e => e.IdSala)
                    .HasName("PK__SALA__C4AEB19CDDB782A5");

                entity.ToTable("SALA");

                entity.Property(e => e.IdSala).HasColumnName("idSala");

                entity.Property(e => e.IdAdministrador).HasColumnName("idAdministrador");

                entity.Property(e => e.IdProfessor).HasColumnName("idProfessor");

                entity.Property(e => e.NomeSala)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nomeSala");

                entity.Property(e => e.NumeroSala)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("numeroSala");

                entity.HasOne(d => d.IdAdministradorNavigation)
                    .WithMany(p => p.Salas)
                    .HasForeignKey(d => d.IdAdministrador)
                    .HasConstraintName("FK__SALA__idAdminist__33D4B598");

                entity.HasOne(d => d.IdProfessorNavigation)
                    .WithMany(p => p.Salas)
                    .HasForeignKey(d => d.IdProfessor)
                    .HasConstraintName("FK__SALA__idProfesso__32E0915F");
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__TIPO_USU__03006BFFED674EA6");

                entity.ToTable("TIPO_USUARIO");

                entity.Property(e => e.IdTipoUsuario).HasColumnName("idTipoUsuario");

                entity.Property(e => e.NomeTipoUser)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nomeTipoUser");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__USUARIO__645723A6E818F3DA");

                entity.ToTable("USUARIO");

                entity.HasIndex(e => e.Email, "UQ__USUARIO__AB6E6164545C93C6")
                    .IsUnique();

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.FotoUsuario)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("fotoUsuario");

                entity.Property(e => e.IdTipoUsuario).HasColumnName("idTipoUsuario");

                entity.Property(e => e.NomeUsuario)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nomeUsuario");

                entity.Property(e => e.Senha)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("senha");

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK__USUARIO__idTipoU__276EDEB3");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
