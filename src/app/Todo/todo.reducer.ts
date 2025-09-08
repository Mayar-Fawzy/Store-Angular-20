import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo } from './todo.actions';

export interface Todo {
  id: number;
  title: string;
}

export const initialState: Todo[] = [];

let currentId = 1;

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { title }) => [
    ...state,
    { id: currentId++, title }
  ]),
  on(removeTodo, (state, { id }) =>
    state.filter(todo => todo.id !== id)
  )
);