import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../users/users.component';
import { RouterModule } from '@angular/router';
import { GetUserService } from '../get-user.service';
import { HttpClientModule } from '@angular/common/http';
import { AbcdComponent } from '../abcd/abcd.component';

const routes = [
  {
    path: '', component: UsersComponent
  },
  { path: ':id', component: AbcdComponent },

  
]

@NgModule({
  declarations: [
    UsersComponent,
    AbcdComponent
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
    UsersComponent,
    AbcdComponent
  ]
})
export class FirstModule { }
