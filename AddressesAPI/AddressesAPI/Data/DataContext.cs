global using Microsoft.EntityFrameworkCore;

namespace AddressesAPI.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
        // DBset Property // representation of the table EF
        public DbSet<Address> Addresses => Set<Address>();
    }
}
