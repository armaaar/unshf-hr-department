import { Component } from '@angular/core';
import { DoubleSwitchOption } from '../double-switch/double-switch.component';
import { HerosService } from '../heros.service';
import { Hero } from '../store/heros/heros.interface';

enum FilterOptions {
  power,
  name
}

@Component({
  selector: 'app-all-heros-page',
  templateUrl: './all-heros-page.component.html',
  styleUrls: ['./all-heros-page.component.scss']
})
export class AllHerosPageComponent {
  heros: Hero[] = [];
  search: string = '';
  filter: FilterOptions = FilterOptions.name;

  get filterOptions(): DoubleSwitchOption<FilterOptions>[] {
    return [
      {
        label: 'Sort by power',
        value: FilterOptions.power
      },
      {
        label: 'Sort by name',
        value: FilterOptions.name
      },
    ]
  }

  get filteredHeros(): Hero[] {
    return this.heros
      .filter(hero => hero.name.toLowerCase().includes(this.search.toLowerCase()))
      .sort((a, b) => {
        if (this.filter === FilterOptions.name) {
          const aName = a.name.toLowerCase();
          const bName = b.name.toLowerCase();

          if (aName < bName) {
              return -1;
          }
          if (aName > bName) {
              return 1;
          }
          return 0;
        }
        return a.powers.length - b.powers.length;
      })
  }

  constructor(
    private herosService: HerosService
  ) {
    this.heros = this.herosService.getAllHeros();
  }
}
