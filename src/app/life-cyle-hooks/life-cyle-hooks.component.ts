import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-life-cyle-hooks',
  templateUrl: './life-cyle-hooks.component.html',
  styleUrls: ['./life-cyle-hooks.component.css']
})
export class LifeCyleHooksComponent implements OnInit, OnChanges {
  @Input() public a = '';

  constructor() {
    console.log("this is constructor")
   }

  ngOnInit(): void {
    console.log("this is ngOnInit")
  }

  public ngOnChanges(): void {
    console.log("this is ngOnChanges")
  }

}
