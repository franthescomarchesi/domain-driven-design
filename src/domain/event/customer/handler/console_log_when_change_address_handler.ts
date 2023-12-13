import EventHandlerInterface from "../../shared/event_handler_interface";
import EventInterface from "../../shared/event_interface";

export default class ConsoleLogWhenChangeAdressHandler implements EventHandlerInterface {

    handle(event: EventInterface): void {
        console.log(`Endereço do cliente: ${event.eventData.id}, ${event.eventData.name} alterado para: ${event.eventData.endereco}`);
    }

}