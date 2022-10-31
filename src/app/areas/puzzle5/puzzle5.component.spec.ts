import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle5Component } from './puzzle5.component';

describe('Puzzle5Component', () => {
  let component: Puzzle5Component;
  let fixture: ComponentFixture<Puzzle5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
