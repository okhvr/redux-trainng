export class Store{
    private state: {[key: string]: any};
    private reducers: {[key: string]: Function};
    private subscribers: Function[];

    constructor(reducers = {}, initialState = {}) {
        this.reducers = reducers;
        this.state = this.reduce(initialState, {});
    }

    get value() {
        return this.state;
    }

    dispatch(action) {
        this.state = this.reduce(this.state, action);
    }

    private reduce(state, action) {
        const newState = {};
        for (const prop in this.reducers) {
            newState[prop] = this.reducers[prop](state[prop], action);
        }
        return newState;
    }
}