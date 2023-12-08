import OrderItem from "./order_item";

export default class Order {

    private _id: string;
    private _customerId: string;
    private _items: OrderItem[];
    private _total: number;

    constructor(id: string, customerId: string, items: OrderItem[]) {
        this._id = id;
        this.validadeId();
        this._customerId = customerId;
        this.validadeCustomerId();
        this._items = items;
        this.validadeItems();
        this._total = this.total();
    }

    get id(): string {
        return this._id;
    }

    get customerId(): string {
        return this._customerId;
    }

    get items(): OrderItem[] {
        return this._items;
    }

    validadeId() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
    }

    validadeCustomerId() {
        if (this._customerId.length === 0) {
            throw new Error("CustomerId is required");
        }
    }

    validadeItems() {
        if (this._items.length === 0) {
            throw new Error("Items are required");
        }
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + item.getTotal(), 0);
    }

}