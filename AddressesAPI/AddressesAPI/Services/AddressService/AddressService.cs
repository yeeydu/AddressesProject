global using AutoMapper;
using AddressesAPI.Data;
using AddressesAPI.Dtos.Address;
using AddressesAPI.Models;

namespace AddressesAPI.Services.AddressService
{

    /// <summary>
    /// Address Service implements IddressService interface
    /// </summary>
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
        /// <summary>
        /// Add a new address record with an increment ID 
        /// </summary>
        /// <param name="newAddress"></param>
        /// <returns></returns>
        public async Task<ServiceResponse<List<GetAddressDto>>> AddAddress(AddAddressDto newAddress)
        {
            var serviceResponse = new ServiceResponse<List<GetAddressDto>>();
            var dbAddress = _mapper.Map<Address>(newAddress);
            dbAddress.Id = _context.Addresses.Max(c => c.Id) + 1;  // add Id
            //_context.Addresses.Add(dbAddress);
            _context.Addresses.Add(_mapper.Map<Address>(newAddress));
            await _context.SaveChangesAsync();
            serviceResponse.Data = _context.Addresses.Select(c => _mapper.Map<GetAddressDto>(c)).ToList();

            return serviceResponse;
        }
        /// <summary>
        /// Service Delete method 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Service Get a Single address by its ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<ServiceResponse<GetAddressDto>> GetAddressById(int id)
        {
            var serviceResponse = new ServiceResponse<GetAddressDto>();
            var dbAddresses = await _context.Addresses.FirstOrDefaultAsync(c => c.Id == id);
            serviceResponse.Data = _mapper.Map<GetAddressDto>(dbAddresses); //dto mapper
            return serviceResponse;

        }

        /// <summary>
        /// Service Get all records method
        /// </summary>
        /// <returns></returns>
        public async Task<ServiceResponse<List<GetAddressDto>>> GetAllAddresses()
        {
            var serviceResponse = new ServiceResponse<List<GetAddressDto>>();
            var dbAddresses = await _context.Addresses.ToListAsync();
            serviceResponse.Data = dbAddresses.Select(c => _mapper.Map<GetAddressDto>(c)).ToList();

            return serviceResponse;
        }

        /// <summary>
        /// Service Update method
        /// </summary>
        /// <param name="updatedAddress"></param>
        /// <returns></returns>
        public async Task<ServiceResponse<GetAddressDto>> UpdateAddress(UpdateAddressDto updatedAddress, int id)
        {
            var serviceResponse = new ServiceResponse<GetAddressDto>();
            try
            {
                var dbAddress = await _context.Addresses.FirstOrDefaultAsync(c => c.Id == id);
                if (dbAddress == null)
                {
                    throw new Exception($"Address id {id} was not found");
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

        public Task<ServiceResponse<GetAddressDto>> UpdateAddress(int id)
        {
            throw new NotImplementedException();
        }
    }
}
