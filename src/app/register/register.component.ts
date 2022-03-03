import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public risterForm: FormGroup;
  public loginStatus: boolean  = false;
  
  constructor(private fb: FormBuilder, private ser: ServiceService, private route: Router) {
    this.risterForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    
   }

  public login() {
    this.ser.getLogin(this.risterForm.value).subscribe((result: any) => {
      console.log(result)
      if (result.status === 1) {
        this.ser.setUserData(result.email)
        localStorage.setItem("username", result.email);
        this.route.navigateByUrl('');
        this.loginStatus = false;
       
      }else{
        this.loginStatus = true;
      }
    })
    
   }
   
   public updateName() {
    this.risterForm.get('username')?.setValue('hiiiiii');
   }

  ngOnInit(): void {
    console.log(this.risterForm)
  }

}
