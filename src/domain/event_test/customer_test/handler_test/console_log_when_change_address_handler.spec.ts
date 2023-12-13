import ChangeAdressEvent from "../../../event/customer/change_address_event";
import ConsoleLogWhenChangeAdressHandler from "../../../event/customer/handler/console_log_when_change_address_handler";
import EventDispatcher from "../../../event/shared/event_dispatcher";

describe("Console log when change address handler tests", () => {

    it("should notify all event handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new ConsoleLogWhenChangeAdressHandler();
        eventDispatcher.register("ChangeAdressEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ChangeAdressEvent"][0]).toMatchObject(eventHandler);
        const changeAdressEvent = new ChangeAdressEvent({
            id: "1",
            name: "Customer 01",
            endereco: "Endereco 01"
        });
        const spyEventHandler = jest.spyOn(eventHandler, "handle");
        eventDispatcher.notify(changeAdressEvent);
        expect(spyEventHandler).toHaveBeenCalled();
    });

});