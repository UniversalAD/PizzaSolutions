using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PizzaSolutions.Startup))]
namespace PizzaSolutions
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
