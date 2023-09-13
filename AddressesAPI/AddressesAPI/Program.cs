using AddressesAPI.Data;
using AddressesAPI.Services.AddressService;
using AddressesAPI.Services.UserService;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add CORS Policy
var policyName = "_myAllowSpecificOrigins";
builder.Services.AddCors((c) => c.AddPolicy("cors", x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));
//---

// Add services to the container.

// Add Database ConnectionString 
builder.Services.AddDbContext<DataContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

                                // Added security definition
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        Description = "Standard Autorization header using te Bearer scheme(\"Bearer {token}\")",
        In = ParameterLocation.Header,
        Name = "Autorization",
        Type =  SecuritySchemeType.ApiKey
    });

    options.OperationFilter<SecurityRequirementsOperationFilter>(); 
});

// Add Authentication 
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration.GetSection("AppSettings:Token").Value)),
        ValidateIssuer = false,
        ValidateAudience = false,

    };
});
// Add Automapper
builder.Services.AddAutoMapper(typeof(Program).Assembly);
// Add Address Service
builder.Services.AddScoped<IAddressService, AddressService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddHttpContextAccessor();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Add middlewer 
app.UseAuthentication();

// Cors Policy
app.UseCors("cors");

app.UseAuthorization();

app.MapControllers();

app.Run();
