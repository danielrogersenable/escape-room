import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle13Component } from './puzzle13.component';

describe('Puzzle13Component', () => {
  let component: Puzzle13Component;
  let fixture: ComponentFixture<Puzzle13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
