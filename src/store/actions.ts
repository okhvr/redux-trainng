//action constants
export const ADD_TODO = '[TODO]: add todo';

//action creators
export class AddTodo {
    readonly type = ADD_TODO;
    constructor(private payload: any) {}
}