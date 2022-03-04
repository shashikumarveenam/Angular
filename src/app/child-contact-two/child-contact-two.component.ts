import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child-contact-two',
  templateUrl: './child-contact-two.component.html',
  styleUrls: ['./child-contact-two.component.css']
})
export class ChildContactTwoComponent implements OnInit {

  public childTwoData: string = "Hi, Iam child two";
  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.testSubject$.subscribe((r: number) => console.log("child two",r))
  }

}
