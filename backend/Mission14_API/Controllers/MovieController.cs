using Microsoft.AspNetCore.Mvc;
using Mission14_API.Data;
using System.Linq;

namespace Mission14_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDBContext context;
        public MovieController(MovieDBContext temp) {
            context = temp;
        }
        public IEnumerable<MovieInfo> Get()
        {
            return context.Movies.ToArray()
                .Where(p => (p.Edited == "Yes"))
                .OrderBy(p => p.Title);
        }

        /*public void Post(MovieInfo)
        {

        }*/
    }
}
