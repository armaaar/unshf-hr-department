import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroProfilePageComponent } from './hero-profile-page.component';

describe('HeroProfilePageComponent', () => {
  let component: HeroProfilePageComponent;
  let fixture: ComponentFixture<HeroProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
