import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle14Component } from './puzzle14.component';

describe('Puzzle14Component', () => {
  let component: Puzzle14Component;
  let fixture: ComponentFixture<Puzzle14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
