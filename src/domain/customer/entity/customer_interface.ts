import Address from "../value_object/address";

export default interface CustomerInterface {

    get id(): string;
    get name(): string;
    get Address(): Address;

}