import Customer from "../entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "../service/order_service";

describe("Order service unit tests", () => {

    it("should place an order", () => {
        const customer = new Customer("c1", "customer 1");
        const item1 = new OrderItem("i1", "Item 1", 10, "p1", 1);
        const order = OrderService.placeOrder(customer, [item1]);
        expect(customer.rewardPoints).toBe(5);
        expect(order.total()).toBe(10);
    });

    it("should get total of all orders", () => {
        const item1 = new OrderItem("item1", "item 1", 100, "p1", 1);
        const item2 = new OrderItem("item2", "item 2", 200, "p2", 2);
        const order1 = new Order("order 1", "customer 1", [item1]);
        const order2 = new Order("order 2", "customer 2", [item2]);
        const total = OrderService.total([order1, order2]);
        expect(total).toBe(500);
    });

});