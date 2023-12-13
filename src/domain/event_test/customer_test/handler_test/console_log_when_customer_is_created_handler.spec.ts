import CustomerCreatedEvent from "../../../event/customer/customer_created_event";
import ConsoleLogWhenCustomerIsCreatedHandler from "../../../event/customer/handler/console_log_when_customer_is_created_hadler";
import EventDispatcher from "../../../event/shared/event_dispatcher";

describe("Console log when customer is created handler tests", () => {

    it("should notify all event handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new ConsoleLogWhenCustomerIsCreatedHandler("primeiro");
        eventDispatcher.register("CustomerCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandler);
        const customerCreatedEvent = new CustomerCreatedEvent({
            name: "Customer 01",
            address: "Address 01",
            active: true,
            rewardPoints: 10
        });
        const spyEventHandler = jest.spyOn(eventHandler, "handle");
        eventDispatcher.notify(customerCreatedEvent);
        expect(spyEventHandler).toHaveBeenCalled();
    });

    it("should console log 2 handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler01 = new ConsoleLogWhenCustomerIsCreatedHandler("primeiro");
        const eventHandler02 = new ConsoleLogWhenCustomerIsCreatedHandler("segundo");
        eventDispatcher.register("CustomerCreatedEvent", eventHandler01);
        eventDispatcher.register("CustomerCreatedEvent", eventHandler02);
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandler01);
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]).toMatchObject(eventHandler02);
        const customerCreatedEvent = new CustomerCreatedEvent({
            name: "Customer 01",
            address: "Address 01",
            active: true,
            rewardPoints: 10
        });
        const spyEventHandler01 = jest.spyOn(eventHandler01, "handle");
        const spyEventHandler02 = jest.spyOn(eventHandler01, "handle");
        eventDispatcher.notify(customerCreatedEvent);
        expect(spyEventHandler01).toHaveBeenCalled();
        expect(spyEventHandler02).toHaveBeenCalled();
    });

});