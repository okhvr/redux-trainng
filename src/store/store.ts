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

    dispatch(action) {
        this.state = {
            ...this.state,
            todos: [...this.state.todos, action.payload],
        }
        console.log(this.state);
    }
}