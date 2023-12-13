import EventInterface from "../shared/event_interface";

export default class ChangeAdressEvent implements EventInterface {

    dataTimeOccurred: Date;
    eventData: any;

    constructor(eventData: any) {
        this.dataTimeOccurred = new Date();
        this.eventData = eventData;
    }

}