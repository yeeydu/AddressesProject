namespace AddressesAPI.Dtos.Address
{
    public class UpdateAddressDto
    {
       // public int Id { get; set; }
        public string? Street { get; set; }
        public string? Postal_code { get; set; }
        public string? Parish { get; set; }
        public string? Council { get; set; }
        public string? District { get; set; }
        public string? Country { get; set; }
    }
}
