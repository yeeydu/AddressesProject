global using AutoMapper;
using AddressesAPI.Data;
using AddressesAPI.Dtos.Address;
using AddressesAPI.Models;

namespace AddressesAPI.Services.AddressService
{
    public class AddressService : IAddressService
    {
        //private static List<Address> addresses = new List<Address>()
        //{
        //    new Address{Id=1, Street = "Eng. Duarte pacheco", Postal_code= "4575-234", Parish = "Torrao",Council= "MCN", District = "Porto", Country = "Portugal"}
        //};
        private readonly IMapper _mapper;
        private readonly DataContext _context;

        public AddressService(IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<ServiceResponse<List<GetAddressDto>>> AddAddress(AddAddressDto newAddress)
        {
            var serviceResponse = new ServiceResponse<List<GetAddressDto>>();
            var address = _mapper.Map<Address>(newAddress);
            address.Id = _context.Addresses.Max(c => c.Id) + 1;  // add Id
            _context.Addresses.Add(address);
            //addresses.Add(_mapper.Map<Address>(newAddress));
            serviceResponse.Data = _context.Addresses.Select(c => _mapper.Map<GetAddressDto>(c)).ToList();

            await _context.SaveChangesAsync();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetAddressDto>>> DeleteAddress(int id)
        {
            var serviceResponse = new ServiceResponse<List<GetAddressDto>>();
            try
            {
                var dbAddresses = await _context.Addresses.FirstOrDefaultAsync(c => c.Id == id);
                if (dbAddresses == null)
                {
                    throw new Exception($"Address id {id} was not found");
                }

                _context.Addresses.Remove(dbAddresses);
                await _context.SaveChangesAsync();

                serviceResponse.Data = _context.Addresses.Select(c => _mapper.Map<GetAddressDto>(c)).ToList();
            }
            catch (Exception ex)
            {

                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }


            return serviceResponse;
        }

        public async Task<ServiceResponse<GetAddressDto>> GetAddressById(int id)
        {
            var serviceResponse = new ServiceResponse<GetAddressDto>();
            var dbAddresses = await _context.Addresses.FirstOrDefaultAsync(c => c.Id == id);
            serviceResponse.Data = _mapper.Map<GetAddressDto>(dbAddresses); //dto mapper
            return serviceResponse;

        }

        public async Task<ServiceResponse<List<GetAddressDto>>> GetAllAddresses()
        {
            var serviceResponse = new ServiceResponse<List<GetAddressDto>>();
            var dbAddresses = await _context.Addresses.ToListAsync();
            serviceResponse.Data = dbAddresses.Select(c => _mapper.Map<GetAddressDto>(c)).ToList();

            return serviceResponse;
        }

        public async Task<ServiceResponse<GetAddressDto>> UpdateAddress(UpdateAddressDto updatedAddress)
        {
            var serviceResponse = new ServiceResponse<GetAddressDto>();
            try
            {
                var dbAddress = await _context.Addresses.FirstOrDefaultAsync(c => c.Id == updatedAddress.Id);
                if (dbAddress == null)
                {
                    throw new Exception($"Address id {updatedAddress.Id} was not found");
                }

                dbAddress.Street = updatedAddress.Street;
                dbAddress.District = updatedAddress.District;
                dbAddress.Country = updatedAddress.Country;
                dbAddress.Parish = updatedAddress.Parish;
                dbAddress.Council = updatedAddress.Council;
                dbAddress.Postal_code = updatedAddress.Postal_code;

                serviceResponse.Data = _mapper.Map<GetAddressDto>(dbAddress);

                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {

                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }


            return serviceResponse;
        }
    }
}
