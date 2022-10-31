import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle7Component } from './puzzle7.component';

describe('Puzzle7Component', () => {
  let component: Puzzle7Component;
  let fixture: ComponentFixture<Puzzle7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
