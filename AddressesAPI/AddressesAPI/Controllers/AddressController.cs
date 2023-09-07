global using AddressesAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace AddressesAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AddressController : ControllerBase
    {
        private static List<Address> addresses = new List<Address>()
        {
            new Address(),
            new Address{Id=1, Street = "Eng. Duarte pacheco", Postal_code= 4575-234, Parish = "Torrao",Council= "MCN", District = "Porto", Country = "Portugal"}
        };

        [HttpGet("GetAll")]
        public ActionResult<List<Address>> Get()
        {
            return Ok(addresses);
        }

        [HttpGet("Single")]
        public ActionResult<List<Address>> GetSingle()
        {
            return Ok(addresses[1]);
        }
    }
}
