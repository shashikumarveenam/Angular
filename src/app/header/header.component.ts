import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public observableData: any;
public userName: string | null = null;
public userdata: any;
  constructor(private service: ServiceService) { }
public color ='blue';
  ngOnInit(): void {
    if (localStorage.getItem("username")) {
      this.userName = this.userdata = localStorage.getItem("username");
      console.log("this.userdata ", this.userdata )
      //this.service.subject.next(this.userdata);
    }

    this.observableData = this.service.subject;
    this.observableData.subscribe((r: any) => {
      if(r){
        console.log(r)
        this.userdata = r.email;
      }
      
      
    })
    
  }

  public signOut() {
    localStorage.removeItem('username');
    this.service.setUserData('');
    this.userdata = '';
  }

}
