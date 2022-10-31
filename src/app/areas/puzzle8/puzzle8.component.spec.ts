import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle8Component } from './puzzle8.component';

describe('Puzzle8Component', () => {
  let component: Puzzle8Component;
  let fixture: ComponentFixture<Puzzle8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
