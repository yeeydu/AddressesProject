using AddressesAPI.Models;

namespace AddressesAPI.Services.AddressService
{
    public class AddressService : IAddressService
    {
        private static List<Address> addresses = new List<Address>()
        {
            new Address(),
            new Address{Id=1, Street = "Eng. Duarte pacheco", Postal_code= "4575-234", Parish = "Torrao",Council= "MCN", District = "Porto", Country = "Portugal"}
        };
        public async Task<List<Address>> AddAddress(Address newAddress)
        {
            addresses.Add(newAddress);
            return addresses;
        }

        public async Task<Address> GetAddressById(int id)
        {
            return addresses.FirstOrDefault(c => c.Id == id);

        }

        public async Task<List<Address>> GetAllAddresses()
        {
            return addresses;
        }
    }
}
