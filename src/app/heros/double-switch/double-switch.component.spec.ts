import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleSwitchComponent } from './double-switch.component';

describe('DoubleSwitchComponent', () => {
  let component: DoubleSwitchComponent<any>;
  let fixture: ComponentFixture<DoubleSwitchComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
