global using AutoMapper;
using AddressesAPI.Dtos.Address;
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
        private readonly IMapper _mapper;

        public AddressService(IMapper mapper)
        {
            _mapper = mapper;
        }

        public async Task<ServiceResponse<List<GetAddressDto>>> AddAddress(AddAddressDto newAddress)
        {
            var serviceResponse = new ServiceResponse<List<GetAddressDto>>();
            var address = _mapper.Map<Address>(newAddress);
            address.Id = addresses.Max(c => c.Id) + 1;  // add Id
            addresses.Add(address);
            addresses.Add(_mapper.Map<Address>(newAddress));
            serviceResponse.Data = addresses.Select(c => _mapper.Map<GetAddressDto>(c)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetAddressDto>> GetAddressById(int id)
        {
            var serviceResponse = new ServiceResponse<GetAddressDto>();
            var address = addresses.FirstOrDefault(c => c.Id == id);
            serviceResponse.Data = _mapper.Map<GetAddressDto>(address); //dto mapper
            return serviceResponse;

        }

        public async Task<ServiceResponse<List<GetAddressDto>>> GetAllAddresses()
        {
            var serviceResponse = new ServiceResponse<List<GetAddressDto>>();
            serviceResponse.Data = addresses.Select(c => _mapper.Map<GetAddressDto>(c)).ToList();

            return serviceResponse;
        }
    }
}
