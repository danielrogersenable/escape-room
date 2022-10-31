import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle10Component } from './puzzle10.component';

describe('Puzzle10Component', () => {
  let component: Puzzle10Component;
  let fixture: ComponentFixture<Puzzle10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
