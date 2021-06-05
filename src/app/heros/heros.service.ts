import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from './store/heros/heros.interface';
import { State } from './store/state.interface';

@Injectable({
  providedIn: 'root'
})
export class HerosService {
  herosState$: Observable<Hero[]>;
  heros: Hero[] = [];

  constructor(
    private store: Store<State>
  ) {
    this.herosState$ = store.select((state) => state.heros.heros);
  }

  private updateCachedHeros() {
    this.herosState$.subscribe(herosState => {
      this.heros = herosState;
    })
  }

  getAllHeros() {
    if (!this.heros.length) {
      this.updateCachedHeros();
    }

    return this.heros;
  }

  getHeroById(id: number) {
    if (!this.heros.length) {
      this.updateCachedHeros();
    }

    return this.heros.find(hero => hero.id === id);
  }
}
