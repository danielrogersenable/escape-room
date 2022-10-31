import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle4Component } from './puzzle4.component';

describe('Puzzle4Component', () => {
  let component: Puzzle4Component;
  let fixture: ComponentFixture<Puzzle4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
