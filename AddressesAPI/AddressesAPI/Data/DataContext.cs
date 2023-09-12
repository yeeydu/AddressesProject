global using Microsoft.EntityFrameworkCore;

namespace AddressesAPI.Data
{

    /// <summary>
    /// Set database with Entityframwork
    /// </summary>
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
        // DBset Property // representation of the table EF
        public DbSet<Address> Addresses => Set<Address>();
        public DbSet<User> Users => Set<User>();
    }
}
