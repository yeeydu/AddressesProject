using AddressesAPI.Models;

namespace AddressesAPI.Services.AddressService
{
    public interface IAddressService
    {
        Task<ServiceResponse<List<Address>>> GetAllAddresses();

        Task<ServiceResponse<Address>> GetAddressById(int id);

        Task<ServiceResponse<List<Address>>> AddAddress(Address newAddress);

    }
}
