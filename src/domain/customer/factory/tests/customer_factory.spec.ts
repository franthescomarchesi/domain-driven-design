import CustomerFactory from "../customer_factory";

describe("Customer factory unit tests", () => {

    it("should create a customer", () => {
        const customer = CustomerFactory.create("Customer 01");
        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("Customer 01");
        expect(customer.Address).toBeUndefined();
    });

    it("should create a customer with an address", () => {
        const customer = CustomerFactory.createWithAddress("Customer 01", "Street 01", 1, "Zip 01", "City 01");
        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("Customer 01");
        expect(customer.Address.street).toBe("Street 01");
        expect(customer.Address.number).toBe(1);
        expect(customer.Address.zip).toBe("Zip 01");
        expect(customer.Address.city).toBe("City 01");
    });

});