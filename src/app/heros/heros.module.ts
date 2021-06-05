import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { herosFeatureKey, herosReducer } from './store/heros/heros.reducer';

import { HerosRoutingModule } from './heros-routing.module';
import { AllHerosPageComponent } from './all-heros-page/all-heros-page.component';
import { HeroProfilePageComponent } from './hero-profile-page/hero-profile-page.component';
import { InfoItemComponent } from './info-item/info-item.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SwitchComponent } from './switch/switch.component';
import { DoubleSwitchComponent } from './double-switch/double-switch.component';

@NgModule({
  declarations: [
    AllHerosPageComponent,
    HeroProfilePageComponent,
    InfoItemComponent,
    SearchInputComponent,
    SwitchComponent,
    DoubleSwitchComponent
  ],
  imports: [
    CommonModule,
    HerosRoutingModule,
    StoreModule.forFeature(herosFeatureKey, herosReducer)
  ]
})
export class HerosModule { }
