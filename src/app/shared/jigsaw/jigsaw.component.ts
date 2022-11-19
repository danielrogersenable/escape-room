import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jigsaw',
  templateUrl: './jigsaw.component.html',
  styleUrls: ['./jigsaw.component.scss']
})
export class JigsawComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public pieceNumber: number;

}
