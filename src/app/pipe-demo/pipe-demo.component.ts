import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  public userData: any = []
  constructor() { }
  ngOnInit(): void {
    this.userData = [
      {name: 'zaaa', mob: '1234567890', date: '03-07-2022'},
      {name: 'abc', mob: '1234567891', date: '07-03-2022'},
      {name: 'yzzz', mob: '1234567892', date: '07-03-2022'}
    ]
  }

}
