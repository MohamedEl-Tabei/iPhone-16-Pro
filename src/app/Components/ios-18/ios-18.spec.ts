import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ios18 } from './ios-18';

describe('Ios18', () => {
  let component: Ios18;
  let fixture: ComponentFixture<Ios18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ios18]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ios18);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
