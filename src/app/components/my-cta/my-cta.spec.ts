import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCTA } from './my-cta';

describe('MyCTA', () => {
  let component: MyCTA;
  let fixture: ComponentFixture<MyCTA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCTA],
    }).compileComponents();

    fixture = TestBed.createComponent(MyCTA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
