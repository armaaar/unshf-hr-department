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

  constructor(
    private herosService: HerosService
  ) {
    this.heros = this.herosService.getAllHeros();
  }
}
