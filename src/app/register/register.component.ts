import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public risterForm: FormGroup;

  constructor(private fb: FormBuilder, private ser: ServiceService) {
    this.risterForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    
   }

  public login() {
    this.ser.getLogin(this.risterForm.value).subscribe(result => {
      console.log(result)
      if (result[0].status === 'success') {
        alert("login successfully")
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
