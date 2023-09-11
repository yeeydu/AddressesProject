namespace AddressesAPI.Models
{
    public class Address
    {
        public int Id { get; set; }
        public string? Street { get; set; }
        public string? Postal_code { get; set; }
        public string? Parish { get; set; }
        public string? Council { get; set; }
        public string? District { get; set; }
        public string? Country { get; set; }

        internal int Max(Func<object, object> value)
        {
            throw new NotImplementedException();
        }
    }
}


