using AddressesAPI.Dtos.Address;

namespace AddressesAPI
{
    public class AutoMapperProfile : Profile
    {
        /// <summary>
        /// AutoMapper Profile methods
        /// </summary>
        public AutoMapperProfile()
        {
            CreateMap<Address, GetAddressDto>();
            CreateMap<AddAddressDto, Address>();
        }
    }
}
