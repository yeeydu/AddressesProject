using AddressesAPI.Dtos.Address;

namespace AddressesAPI
{
    public class AutoMapperProfile: Profile
    {

        public AutoMapperProfile()
        {
            CreateMap<Address, GetAddressDto>();
            CreateMap<AddAddressDto, Address>();
        }
    }
}
