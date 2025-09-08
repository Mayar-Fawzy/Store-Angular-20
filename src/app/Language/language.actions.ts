import { createAction, props } from '@ngrx/store';

export const changeLanguage = createAction(
  '[Language] Change',
  props<{ lang: 'ar' | 'en' }>()
);