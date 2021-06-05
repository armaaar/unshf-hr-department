import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { herosFeatureKey, herosReducer } from './store/heros/heros.reducer';

import { HerosRoutingModule } from './heros-routing.module';
import { AllHerosPageComponent } from './all-heros-page/all-heros-page.component';
import { HeroProfilePageComponent } from './hero-profile-page/hero-profile-page.component';


@NgModule({
  declarations: [
    AllHerosPageComponent,
    HeroProfilePageComponent
  ],
  imports: [
    CommonModule,
    HerosRoutingModule,
    StoreModule.forFeature(herosFeatureKey, herosReducer)
  ]
})
export class HerosModule { }
