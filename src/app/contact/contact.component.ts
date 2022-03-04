import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChildContactTwoComponent } from '../child-contact-two/child-contact-two.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {

  @ViewChild('ChildContactTwoComponent', { static: false }) ChildContactTwoComponent: any;

public parentData: number = 1;
// public testSubject$: any = new BehaviorSubject<number>(0);

  constructor(private serviceService: ServiceService) { }
public observablevalue = 0;
  ngOnInit(): void {
    console.log(this.parentData);
    this.serviceService.testSubject$.subscribe((value: number )=> {
      console.log("contatact component",value);
      this.observablevalue = value;
    });
  }

  ngAfterViewInit() {
    console.log(this.ChildContactTwoComponent?.childTwoData)
  }

  public setObservable() {
    this.serviceService.testSubject$.next(1);
  }
  

  // public getDefaultParent(defaultNumber: number){
  //   this.parentData = defaultNumber;
  //   //alert(event)
  // }

  

}
