global using AddressesAPI.Models;
using AddressesAPI.Services.AddressService;
using Microsoft.AspNetCore.Mvc;

namespace AddressesAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AddressController : ControllerBase
    {
        // Add Address Service
        private readonly IAddressService _addressService;
        public AddressController(IAddressService addressService)
        {
            _addressService = addressService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<ServiceResponse<List<Address>>>> Get()
        {
            return Ok(await _addressService.GetAllAddresses());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<List<Address>>>> GetSingle(int id)
        {
            return Ok(await _addressService.GetAddressById(id));
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<Address>>>> AddAddress(Address newAddress)
        {
         
            return Ok(await _addressService.AddAddress(newAddress));
        }

    }
}
