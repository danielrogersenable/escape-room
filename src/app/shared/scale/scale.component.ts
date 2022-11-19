import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss']
})
export class ScaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public scaleNumber: number;
}
