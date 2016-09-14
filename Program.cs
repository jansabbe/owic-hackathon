using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace PetCupid
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app)
        {
            app.UseDeveloperExceptionPage();
            app.UseFileServer();
            app.UseMvc();
            //app.Run(context => context.Response.WriteAsync("Hello world"));
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }
    }

    

    public class Program
    {
        public static void Main(string[] args)
        {
            var webhost = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseStartup<Startup>()
                .Build();
            webhost.Run();
        }
    }
}
