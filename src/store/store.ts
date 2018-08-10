export class Store{
    private state: {[key: string]: any};
    private reducer: {[key: string]: Function};
    private subscribers: Function[];

    constructor(reducer = {}, initialState = {}) {
        this.state = initialState;
    }

    get value() {
        return this.state;
    }
}