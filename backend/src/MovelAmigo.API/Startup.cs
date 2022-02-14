using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.CookiePolicy;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using MovelAmigo.Data.Context;
using MovelAmigo.Data.Repositories;
using MovelAmigo.Domain.Interfaces.Repositories;
using MovelAmigo.Domain.Interfaces.Services;
using MovelAmigo.Domain.Services;

namespace MovelAmigo.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {

        services.AddRazorPages();

        // ----------Addition 1------ 
        services.Configure<CookiePolicyOptions>(options =>
        {

            // prevent access from javascript 
            options.HttpOnly = HttpOnlyPolicy.Always;

            // If the URI that provides the cookie is HTTPS, 
            // cookie will be sent ONLY for HTTPS requests 
            // (refer mozilla docs for details) 
            options.Secure = CookieSecurePolicy.SameAsRequest;

            // refer "SameSite cookies" on mozilla website 
            options.MinimumSameSitePolicy = SameSiteMode.None;

        });

        // This method gets called by the runtime. Use this method to add services to the container.
            services.AddDbContext<DataContext>(
                options => options.UseSqlite(Configuration.GetConnectionString("Default"))
            );
            services.AddScoped<IMovelRepo, MovelRepo>();
            services.AddScoped<IMovelService, MovelService>();
            services.AddScoped<IGeralRepo, GeralRepo>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<JwtService>();

            services.AddControllers()
                    .AddJsonOptions(options =>
                         {
                             options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
                         }
                    );
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "MovelAmigo.API", Version = "v1" });
            });
            
            /*Permitir o frontend aceder ao backend */
            services.AddCors();
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "MovelAmigo.API v1"));
            }

            app.UseHttpsRedirection();

            app.UseStaticFiles(new StaticFileOptions {
                FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath,"images")),
                RequestPath = "/images"
            });

            app.UseRouting();

            app.UseAuthorization();
            
            /*Confirguração para permitir o frontend aceder ao backend*/
            app.UseCors(option => option.AllowAnyHeader()
                                        .AllowAnyMethod()
                                        .WithOrigins("http://localhost:3000")
                                        .AllowCredentials());

            
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
