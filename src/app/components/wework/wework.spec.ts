import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wework } from './wework';

describe('Wework', () => {
  let component: Wework;
  let fixture: ComponentFixture<Wework>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wework],
    }).compileComponents();

    fixture = TestBed.createComponent(Wework);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
