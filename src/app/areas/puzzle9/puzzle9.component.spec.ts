import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle9Component } from './puzzle9.component';

describe('Puzzle9Component', () => {
  let component: Puzzle9Component;
  let fixture: ComponentFixture<Puzzle9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
