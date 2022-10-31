import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle6Component } from './puzzle6.component';

describe('Puzzle6Component', () => {
  let component: Puzzle6Component;
  let fixture: ComponentFixture<Puzzle6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
