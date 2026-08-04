import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecauseWe } from './because-we';

describe('BecauseWe', () => {
  let component: BecauseWe;
  let fixture: ComponentFixture<BecauseWe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecauseWe],
    }).compileComponents();

    fixture = TestBed.createComponent(BecauseWe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
