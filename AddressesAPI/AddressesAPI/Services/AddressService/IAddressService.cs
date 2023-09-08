using AddressesAPI.Dtos.Address;
using AddressesAPI.Models;

namespace AddressesAPI.Services.AddressService
{
    public interface IAddressService
    {
        Task<ServiceResponse<List<GetAddressDto>>> GetAllAddresses();

        Task<ServiceResponse<GetAddressDto>> GetAddressById(int id);

        Task<ServiceResponse<List<GetAddressDto>>> AddAddress(AddAddressDto newAddress);

        Task<ServiceResponse<GetAddressDto>> UpdateAddress(UpdateAddressDto updatedAddress);
    }
}
