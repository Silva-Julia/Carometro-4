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

            modelBuilder.Entity<Aluno>(entity =>
            {
                entity.HasKey(e => e.IdAluno)
                    .HasName("PK__ALUNO__0C5BC84962105F55");

                entity.ToTable("ALUNO");

                entity.Property(e => e.IdAluno).HasColumnName("idAluno");

                entity.Property(e => e.FotoDoPerfil)
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
                    .HasColumnName("situacao")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Telefone)
                    .HasMaxLength(11)
                    .IsUnicode(false)
                    .HasColumnName("telefone");

                entity.HasOne(d => d.IdSalaNavigation)
                    .WithMany(p => p.Alunos)
                    .HasForeignKey(d => d.IdSala)
                    .HasConstraintName("FK__ALUNO__idSala__33D4B598");
            });

            modelBuilder.Entity<Materium>(entity =>
            {
                entity.HasKey(e => e.IdMateria)
                    .HasName("PK__MATERIA__4B740AB305D0B1A5");

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
                    .HasName("PK__PROFESSO__4E7C3C6D56071392");

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
                    .HasName("PK__SALA__C4AEB19C10CDC28B");

                entity.ToTable("SALA");

                entity.Property(e => e.IdSala).HasColumnName("idSala");

                entity.Property(e => e.IdProfessor).HasColumnName("idProfessor");

                entity.Property(e => e.NomeSala)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nomeSala");

                entity.Property(e => e.NumeroSala).HasColumnName("numeroSala");



                entity.HasOne(d => d.IdProfessorNavigation)
                    .WithMany(p => p.Salas)
                    .HasForeignKey(d => d.IdProfessor)
                    .HasConstraintName("FK__SALA__idProfesso__300424B4");
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__TIPO_USU__03006BFF0F06141E");

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
                    .HasName("PK__USUARIO__645723A6938A6FAE");

                entity.ToTable("USUARIO");

                entity.HasIndex(e => e.Email, "UQ__USUARIO__AB6E61643954447D")
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
                    .HasMaxLength(61)
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
