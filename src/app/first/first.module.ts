import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../users/users.component';
import { RouterModule } from '@angular/router';
import { GetUserService } from '../get-user.service';
import { HttpClientModule } from '@angular/common/http';

const routes = [
  {
    path: '', component: UsersComponent,
  }

  
]

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    GetUserService,
  ],
  exports: [
    UsersComponent
  ]
})
export class FirstModule { }
