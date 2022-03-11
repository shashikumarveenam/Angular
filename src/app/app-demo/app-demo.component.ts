import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-demo',
  templateUrl: './app-demo.component.html',
  styleUrls: ['./app-demo.component.css']
})
export class AppDemoComponent implements OnInit {
public name: string = 'shashi';
  constructor() { }

  ngOnInit(): void {
  }
  public setVal(name: string): void {
    this.name = 'rishi';
  }
}
