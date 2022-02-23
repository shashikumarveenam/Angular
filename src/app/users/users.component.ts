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
  public a: string ="";
  constructor(private getUser: GetUserService) { }

  ngOnInit(): void {
    // getUsersList return observable so by subscribe() we can access the data
    this.getUser.getUsersList().subscribe(result => {
      this.users = result;
    }
    )

    this.a = this.getUser.getAvbc();

    this.getUser.staticObserable().subscribe(result=> console.log(result))
  }

}
