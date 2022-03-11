import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  public observableData: any;
public userName: string | null = null;
public userdata: any;
@Input() public val: any;
@Input() public age: string = '';
  constructor(private service: ServiceService, private router: Router) { 
    console.log("this is constructor")
  }

public color ='blue';
  ngOnInit(): void {
    //this.val = 'rishi';
    console.log("this is ngOnInit")
    if (localStorage.getItem("username")) {
      this.userName = this.userdata = localStorage.getItem("username");
      console.log("this.userdata ", this.userdata )
      //this.service.subject.next(this.userdata);
    }

    this.observableData = this.service.subject;
    this.observableData.subscribe((r: any) => {
      if(r){
       // console.log(r)
        this.userdata = r.email;
      }
      
      
    })
    
  }

  public ngOnChanges(change: SimpleChanges): void {
    console.log("this is ngOnChanges from header", change)
  }

  public ngDoCheck(): void {
    console.log("this is ngDoCheck from header", this.val)
  }
  ngAfterContentInit() {
    console.log("this is ngAfterContentInit from header", this.val)
  }
  ngAfterContentChecked() {
    console.log("this is ngAfterContentChecked from header", this.val)
  }
  ngAfterViewInit() {
    console.log("this is ngAfterViewInit from header", this.val)
  }
  ngAfterViewChecked() {
    console.log("this is ngAfterViewChecked from header", this.val)
  }

  public signOut() {
    localStorage.removeItem('username');
    localStorage.removeItem("token");
    this.service.setUserData('');
    this.userdata = '';
    this.router.navigate([""]);
  }

}
