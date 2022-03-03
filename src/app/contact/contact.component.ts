import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

public parentData: number = 1;
  constructor() { }

  ngOnInit(): void {
    console.log(this.parentData)
  }

  public getDefaultParent(defaultNumber: number){
    this.parentData = defaultNumber;
    //alert(event)
  }

  

}
