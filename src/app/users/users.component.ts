import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: any = [
    {
      name: 'shashi', mob: '9063735954'
    },
    {
      name: 'abcd', mob: '11222222'
    }
  ]
  constructor() { }

  ngOnInit(): void {
    console.log("this  is usercomponent")
  }

}
