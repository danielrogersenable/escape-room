import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle3Component } from './puzzle3.component';

describe('Puzzle3Component', () => {
  let component: Puzzle3Component;
  let fixture: ComponentFixture<Puzzle3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
