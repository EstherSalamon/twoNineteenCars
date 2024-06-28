using System.Text.Json.Serialization;

namespace pplCarsTwo19.Web;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddControllersWithViews();

        builder.Services.AddControllersWithViews()
                 .AddJsonOptions(opts =>
                 {
                     var enumConverter = new JsonStringEnumConverter();
                     opts.JsonSerializerOptions.Converters.Add(enumConverter);
                 });


        var app = builder.Build();

        if (!app.Environment.IsDevelopment())
        {
            app.UseHsts();
        }

        //app.UseHttpsRedirection();
        app.UseStaticFiles();
        app.UseRouting();


        app.MapControllerRoute(
            name: "default",
            pattern: "{controller}/{action=Index}/{id?}");

        app.MapFallbackToFile("index.html");

        app.Run();
    }
}