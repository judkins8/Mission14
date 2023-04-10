using Microsoft.AspNetCore.Mvc;
using Mission_14.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_14.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            var x = context.Movies
                .Where(x => x.Edited=="Yes")
                .OrderBy(x => x.Title)
                .ToArray();
            
            return x;
        }
    }
}
