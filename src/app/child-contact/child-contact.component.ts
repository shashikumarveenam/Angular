import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-contact',
  templateUrl: './child-contact.component.html',
  styleUrls: ['./child-contact.component.css']
})
export class ChildContactComponent implements OnInit {

  @Output() public setDefaultToParent: EventEmitter<number> = new EventEmitter();

  @Input() public childVar: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  public setDefault() {
    this.setDefaultToParent.emit(1);
  }

}
