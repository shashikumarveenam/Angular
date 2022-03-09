import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../users/users.component';
import { RouterModule } from '@angular/router';
import { GetUserService } from '../get-user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AbcdComponent } from '../abcd/abcd.component';
import { HeaderInterceptor } from '../header-interceptor';

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
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],
  exports: [
    UsersComponent,
    AbcdComponent
  ]
})
export class FirstModule { }
