import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllHerosPageComponent } from './all-heros-page/all-heros-page.component';
import { HeroProfilePageComponent } from './hero-profile-page/hero-profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: AllHerosPageComponent
  },
  {
    path: ':heroId',
    component: HeroProfilePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerosRoutingModule { }
