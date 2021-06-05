import { Component } from '@angular/core';
import { HerosService } from '../heros.service';
import { Hero } from '../store/heros/heros.interface';

@Component({
  selector: 'app-all-heros-page',
  templateUrl: './all-heros-page.component.html',
  styleUrls: ['./all-heros-page.component.css']
})
export class AllHerosPageComponent {
  heros: Hero[] = [];

  constructor(
    private herosService: HerosService
  ) {
    this.heros = this.herosService.getAllHeros();
  }
}
