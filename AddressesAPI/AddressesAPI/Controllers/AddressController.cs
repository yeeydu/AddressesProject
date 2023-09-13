global using AddressesAPI.Models;
using AddressesAPI.Dtos.Address;
using AddressesAPI.Services.AddressService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AddressesAPI.Controllers
{

    /// <summary>
    /// API controller inmplements the Address Service 
    /// </summary>
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
        public async Task<ActionResult<ServiceResponse<List<GetAddressDto>>>> Get()
        {
            return Ok(await _addressService.GetAllAddresses());
        }

        [HttpGet("{id}"), Authorize]
        public async Task<ActionResult<ServiceResponse<List<GetAddressDto>>>> GetSingle(int id)
        {
            return Ok(await _addressService.GetAddressById(id));
        }

        [HttpPost, Authorize]
        public async Task<ActionResult<ServiceResponse<List<GetAddressDto>>>> AddAddress(AddAddressDto newAddress)
        {

            return Ok(await _addressService.AddAddress(newAddress));
        }

        [HttpPut, Authorize]
        public async Task<ActionResult<ServiceResponse<List<GetAddressDto>>>> UpdateAddress(UpdateAddressDto updatedAddress)
        {
            var response = await _addressService.UpdateAddress(updatedAddress);
            if (response.Data is null)
            {
                return NotFound(response);
            }
            return Ok(response.Data);
        }


        [HttpDelete("{id}"), Authorize]
        public async Task<ActionResult<ServiceResponse<List<GetAddressDto>>>> DeleteAddress(int id)
        {
            var response = await _addressService.DeleteAddress(id);
            if (response.Data is null)
            {
                return NotFound(response);
            }
            return Ok(response.Data);
        }
    }
}
