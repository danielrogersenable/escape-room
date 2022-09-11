import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  constructor() { }

  @Input()
  public title = '';

  @Input()
  public description = '';

  @Input()
  public complete = false;

  ngOnInit(): void {
  }
}
