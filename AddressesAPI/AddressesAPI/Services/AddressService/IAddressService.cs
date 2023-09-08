namespace AddressesAPI.Services.AddressService
{
    public interface IAddressService
    {
        Task<List<Address>> GetAllAddresses();

        Task<Address> GetAddressById(int id);

        Task<List<Address>> AddAddress(Address newAddress);

    }
}
