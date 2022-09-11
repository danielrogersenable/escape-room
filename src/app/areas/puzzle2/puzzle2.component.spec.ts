import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle2Component } from './puzzle2.component';

describe('Puzzle2Component', () => {
  let component: Puzzle2Component;
  let fixture: ComponentFixture<Puzzle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
