import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHerosPageComponent } from './all-heros-page.component';

describe('AllHerosPageComponent', () => {
  let component: AllHerosPageComponent;
  let fixture: ComponentFixture<AllHerosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHerosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHerosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
