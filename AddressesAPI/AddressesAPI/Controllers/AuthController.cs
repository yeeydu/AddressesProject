using AddressesAPI.Dtos.User;
using AddressesAPI.Services.UserService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AddressesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        /// <summary>
        /// The Auth controller 
        /// </summary>
        public static User user = new User();
        private readonly IConfiguration _configuration;
        private readonly IUserService _userService;

        public AuthController(IConfiguration configuration, IUserService userService)
        {
            _configuration = configuration;
            _userService = userService;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet, Authorize]
        public ActionResult<string> Get()
        { 
            var userName = _userService.GetUserName();
            return Ok(userName);

            //var userName = User?.Identity?.Name;
            //return Ok(userName);
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost("register")]
        public ActionResult<User> Register(UserDto request)
        {
            //BCrypt generates a salt value in the password
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(request.PasswordHash);

            user.Username = request.Username;
            user.PasswordHash = passwordHash;

            return Ok(user);
        }

        [HttpPost("login")]
        public ActionResult<User> Login(UserDto request)
        {
            if (user.Username != request.Username)
            {
                return BadRequest("User not Found");

            }
            if (!BCrypt.Net.BCrypt.Verify(request.PasswordHash, user.PasswordHash))
            {
                return BadRequest("Wrong password");
            }

            string token = CreateToken(user);
            return Ok(token);
        }

        /// <summary>
        /// Create the token for the registered user method
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        private string CreateToken(User user)
        {
            // Claims 
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username)

            };

            // create Key token
            var Key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value!));
            
            //signing in token
            var creds = new SigningCredentials(Key, SecurityAlgorithms.HmacSha512Signature);

            //Paylod
            var token = new JwtSecurityToken( 
                claims: claims, 
                expires: DateTime.Now.AddDays(1), 
                signingCredentials: creds
                );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

    }
}
