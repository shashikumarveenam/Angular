import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../get-user.service';
import { eachUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: eachUser[] = [];
  constructor(private getUserService: GetUserService) { }

  ngOnInit(): void {
    this.getUserService.getUsersList().subscribe(result => this.users = result)
  }

}
