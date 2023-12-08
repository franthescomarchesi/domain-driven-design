import Address from "../entity/address";
import Customer from "../entity/customer";

describe("Customer unit tests", () => {
    
    it("should throw error when id is empty", () => {
        expect(() => {
            const customer = new Customer("", "John");
        }).toThrowError("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            const customer = new Customer("123", "");
        }).toThrowError("Name is required");
    });

    it("should throw error when name is changed to empty", () => {
        expect(() => {
            const customer = new Customer("123", "John");
            customer.changeName("");
        }).toThrowError("Name is required");
    });

    it("should change name", () => {
        const customer = new Customer("123", "John");
        customer.changeName("Jane");
        expect(customer.name).toBe("Jane");
    });

    it("should activate", () => {
        const customer = new Customer("1", "Customer 1");
        const address = new Address("Street 1", 123, "13330-250", "São Paulo");
        customer.Address = address;
        customer.activate();
        expect(customer.isActive()).toBe(true);
    });

    it("should deactivate", () => {
        const customer = new Customer("1", "Customer 1");
        customer.deactivate();
        expect(customer.isActive()).toBe(false);
    });

    it("should throw error if activate with address undefined", () => {
        expect(() => {
            const customer = new Customer("1", "Customer 1");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    });

    it("should add reward points", () => {
        const customer = new Customer("1", "Customer 1");
        expect(customer.rewardPoints).toBe(0);
        customer.addRewardsPoints(10);
        expect(customer.rewardPoints).toBe(10);
        customer.addRewardsPoints(10);
        expect(customer.rewardPoints).toBe(20);
    });

});