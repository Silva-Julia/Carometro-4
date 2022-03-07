using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using nota10.webApi.Contexts;
using nota10.webApi.Interfaces;
using nota10.webApi.Repositories;
using Microsoft.IdentityModel.Tokens;
using System;

namespace nota10.webApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services
              .AddControllers()
              .AddNewtonsoftJson(options => {
                  options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                  options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
              });

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                                builder =>
                                {
                                    builder.WithOrigins("*")
                                    .AllowAnyHeader()
                                    .AllowAnyMethod();
                                });
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "nota10.webApi", Version = "v1" });
            });


            services.AddDbContext<Nota10Context>(options =>
                             options.UseSqlServer(Configuration.GetConnectionString("Default"))
                         );

            services
                .AddAuthentication(option =>
                {
                    option.DefaultAuthenticateScheme = "JwtBearer";
                    option.DefaultChallengeScheme = "JwtBearer";
                }
                )

                .AddJwtBearer("JwtBearer", options =>
                options.TokenValidationParameters = new TokenValidationParameters()
                {

                    // será validado emissor do token
                    ValidateIssuer = true,

                    //será validade endereço do token
                    ValidateAudience = true,

                    //será vailidado tempo do token
                    ValidateLifetime = true,

                    //definição da chave de segurança
                    IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("ASDFÇAJSÇDF-LAJSDFJAÇKFD-ADJFKAJÇKSDFJ")),

                    //define o tempo de expiração
                    ClockSkew = TimeSpan.FromHours(1),

                    //nome de emissor
                    ValidIssuer = "nota10.webApi",

                    //nome do destinatário
                    ValidAudience = "nota10.webApi"
                }
                );


            services.AddTransient<DbContext, Nota10Context>();
            services.AddTransient<IUsuarioRepository, UsuarioRepository>();
            services.AddTransient<ISalaRepository, SalaRepository>();
            services.AddTransient<IProfessorRepository, ProfessorRepository>();
            services.AddTransient<IAlunoRepository, AlunoRepository>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseCors("CorsPolicy");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });



            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "nota10.webApi v1"));
            }
        }
    }
}
