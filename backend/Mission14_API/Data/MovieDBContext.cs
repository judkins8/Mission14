using Microsoft.EntityFrameworkCore;

namespace Mission14_API.Data
{
    public class MovieDBContext : DbContext 
    { 
        public MovieDBContext(DbContextOptions<MovieDBContext> options) : base(options) { }

        public DbSet<MovieInfo> Movies { get; set; }
    }
}
