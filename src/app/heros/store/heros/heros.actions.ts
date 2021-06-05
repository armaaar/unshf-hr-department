import { createAction, props } from '@ngrx/store';
import { Hero } from './heros.interface';

export const setHeros = createAction('[Heros] Set Heros', props<{heros: Hero[]}>());
