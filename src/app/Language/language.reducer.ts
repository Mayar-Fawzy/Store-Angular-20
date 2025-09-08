import { createReducer, on } from '@ngrx/store';
import { changeLanguage } from './language.actions';

export interface LanguageState {
  current: 'ar' | 'en';
}

export const initialState: LanguageState = {
  current: 'en'
};

export const languageReducer = createReducer(
    //stste
  initialState,
  //action
  on(changeLanguage, (state, { lang }) => ({ ...state, current: lang }))
);
