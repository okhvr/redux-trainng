import { renderTodos } from './utils';
import * as fromStore from './store';

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;


const reducers = {
  todos: fromStore.reducer
}
const store = new fromStore.Store(reducers);

button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;

    const payload = { label: input.value, complete: false };

    store.dispatch(new fromStore.AddTodo(payload));
    input.value = '';
  },
  false
);

const unsubscribe = store.subscibe((state) => {
  renderTodos(state.todos.data);
})

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    console.log(target);
  }
});

destroy.addEventListener('click', unsubscribe);

store.subscibe((store) => console.log('SUBSCRIBER:::', store));