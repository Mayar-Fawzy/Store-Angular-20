import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';

import { addTodo, removeTodo } from '../../../Todo/todo.actions';
import { Todo } from '../../../Todo/todo.reducer';
import { FormsModule } from '@angular/forms';
import { NgFor, AsyncPipe } from '@angular/common';
import { LanguageState } from '../../../Language/language.reducer';
import { selectCurrentLanguage } from '../../../Language/language.selectors';
import { changeLanguage } from '../../../Language/language.actions';

interface AppState {
  todos: Todo[];
  language: LanguageState;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  NewSignal=signal("");
  Addtext(){
    this.NewSignal.set("Hello from signal");
  }
  removeText(){
    this.NewSignal.set("");
  }
  newTask = '';

  private store = inject(Store<AppState>);

  // Todos
  todos$ = this.store.select('todos');

  add() {
    if (this.newTask.trim()) {
      this.store.dispatch(addTodo({ title: this.newTask }));
      this.newTask = '';
    }
  }

  remove(id: number) {
    this.store.dispatch(removeTodo({ id }));
  }

  // Language
  lang = toSignal(this.store.select(selectCurrentLanguage), { initialValue: 'en' });

  switchTo(lang: 'ar' | 'en') {
    this.store.dispatch(changeLanguage({ lang }));
  }
}
