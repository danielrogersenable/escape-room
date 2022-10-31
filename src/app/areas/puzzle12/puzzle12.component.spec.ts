import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle12Component } from './puzzle12.component';

describe('Puzzle12Component', () => {
  let component: Puzzle12Component;
  let fixture: ComponentFixture<Puzzle12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
