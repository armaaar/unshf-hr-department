import { Component, Input } from '@angular/core';
import { Hero } from '../store/heros/heros.interface';

@Component({
  selector: 'app-heros-table',
  templateUrl: './heros-table.component.html',
  styleUrls: ['./heros-table.component.scss']
})
export class HerosTableComponent {
  @Input() heros: Hero[] = [];

  constructor() { }

  heroStars(heroRate: number) {
    const activeStars = Math.min(heroRate, 5)
    return {
      active: Array(activeStars),
      inactive: Array(5 - activeStars)
    };
  }

}
