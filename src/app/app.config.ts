import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { todoReducer } from './Todo/todo.reducer';
import { languageReducer, LanguageState } from './Language/language.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideStore(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideEffects(),
    provideStore({ todos: todoReducer })
    , provideStore({ language: languageReducer })
  ]
};
