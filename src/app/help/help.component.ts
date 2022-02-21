import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { A, CountryInterface, UserInterfaces } from '../interfaces/user.interface';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  
  public helpData = "hiiiii";
  public users: UserInterfaces[] = [
    {'name': 'shashi', 'mobile': '123'},
    {'name': 'abcd','mobile': '456'}
  ];

  public getData(data: any){
    this.helpData = data;
  }
  public a: A[]  = [
   {
      'name': 'shashi',
      'address': [
        { 'city': "hyd" }
      ]
    },
    {
      'name': 'rishi',
      'address': [
        { 'city': "wgl" }
      ]
    }
  ]
public name: string = "shashi";
public age: number = 25;
  constructor(private ar: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("first",this.a[0]);
    console.log("second",this.a[1].name);
    console.log("shashiiiiii",this.ar['snapshot']['params']['uid'])
  }

}
