import Address from "./address";

export default class Customer {

    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;
    private _rewardPoints: number = 0;

    constructor(id: string, name: string) {
        this._id = id;
        this.validadeId();
        this._name = name;
        this.validateName();
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get rewardPoints(): number {
        return this._rewardPoints;
    }

    set rewardPoints(rewardPoints: number) {
        this._rewardPoints = rewardPoints;
    }

    get Address(): Address{
        return this._address;
    }

    set Address(address: Address) {
        this._address = address;
    }

    validadeId() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
    }

    validateName() {
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validateName();
    }

    activate() {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer");
        }
        this._active = true;
    }

    isActive() {
        return this._active;
    }

    deactivate() {
        this._active = false;
    }

    addRewardsPoints(points: number) {
        this._rewardPoints += points;
    }

}