import { Action, createReducer, on } from '@ngrx/store';
import { HerosState } from './heros.interface';
import { herosInitialState } from './heros.initial-state';
import * as herosActions from './heros.actions';

export const herosFeatureKey = 'heros';

export const initialState: HerosState = {
  heros: herosInitialState
};

const _herosReducer = createReducer(
  initialState,
  on(herosActions.setHeros, (state: HerosState, { heros }) => ({ heros: heros }))
);

export function herosReducer(state: HerosState | undefined, action: Action) {
  return _herosReducer(state, action);
}
