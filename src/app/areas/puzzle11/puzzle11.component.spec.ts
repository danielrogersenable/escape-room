import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle11Component } from './puzzle11.component';

describe('Puzzle11Component', () => {
  let component: Puzzle11Component;
  let fixture: ComponentFixture<Puzzle11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
