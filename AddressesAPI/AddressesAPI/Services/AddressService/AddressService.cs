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

        public async Task<ServiceResponse<List<Address>>> AddAddress(Address newAddress)
        {
            var serviceResponse = new ServiceResponse<List<Address>>();
            addresses.Add(newAddress);
            serviceResponse.Data = addresses;
            return serviceResponse;
        }

        public async Task<ServiceResponse<Address>> GetAddressById(int id)
        {
            var serviceResponse = new ServiceResponse<Address>();
            var address = addresses.FirstOrDefault(c => c.Id == id);
            serviceResponse.Data = address;
            return serviceResponse;

        }

        public async Task<ServiceResponse<List<Address>>> GetAllAddresses()
        {
            var serviceResponse = new ServiceResponse<List<Address>>();
            serviceResponse.Data = addresses;

            return serviceResponse;
        }
    }
}
