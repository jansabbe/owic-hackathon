using Microsoft.EntityFrameworkCore;

namespace PetCupid
{
    public class PetCupidContext : DbContext
    {
        public DbSet<PetCupid> PetCupids { get; set; }

        public PetCupidContext (DbContextOptions<PetCupidContext> options) : base(options)
        {
          
        }
    }
}