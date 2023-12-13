import EventHandlerInterface from "../../shared/event_handler_interface";
import EventInterface from "../../shared/event_interface";

export default class ConsoleLogWhenCustomerIsCreatedHandler implements EventHandlerInterface {

    private ordem: string;

    constructor(ordem: string) {
        this.ordem = ordem;
    }

    handle(event: EventInterface): void {
        console.log(`Esse é o ${this.ordem} console.log do evento: CustomerCreated`);
    }

}