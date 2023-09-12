using AddressesAPI.Dtos.Address;
using AddressesAPI.Models;

namespace AddressesAPI.Services.AddressService
{
    /// <summary>
    /// Address Service Interface with it methods
    /// </summary>
    public interface IAddressService
    {
        Task<ServiceResponse<List<GetAddressDto>>> GetAllAddresses();

        Task<ServiceResponse<GetAddressDto>> GetAddressById(int id);

        Task<ServiceResponse<List<GetAddressDto>>> AddAddress(AddAddressDto newAddress);

        Task<ServiceResponse<GetAddressDto>> UpdateAddress(UpdateAddressDto updatedAddress);
        Task<ServiceResponse<List<GetAddressDto>>> DeleteAddress(int id);
    }
}
