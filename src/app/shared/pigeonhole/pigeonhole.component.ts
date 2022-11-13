import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pigeonhole',
  templateUrl: './pigeonhole.component.html',
  styleUrls: ['./pigeonhole.component.scss']
})
export class PigeonholeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public number: string;

  @Input()
  public letter: string;
}
