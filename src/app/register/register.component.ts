import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public risterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.risterForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      address: this.fb.group({
        city: [],
        state: []
      })
    })
    
   }

   public register() {
    console.log(this.risterForm)
   }
   
   public updateName() {
    this.risterForm.get('username')?.setValue('hiiiiii');
   }

  ngOnInit(): void {
    console.log(this.risterForm)
  }

}
