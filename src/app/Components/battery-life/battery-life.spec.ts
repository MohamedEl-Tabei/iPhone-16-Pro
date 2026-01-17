import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryLife } from './battery-life';

describe('BatteryLife', () => {
  let component: BatteryLife;
  let fixture: ComponentFixture<BatteryLife>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatteryLife]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteryLife);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
