import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';
import { AppDemoComponent } from './app-demo/app-demo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Help1Component } from './help1/help1.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';


const routes = [
  {
    path: '', component: AppDemoComponent,
    children: [
      {
        path: 'help/:uid', component: HelpComponent,
        children: [
          {path: 'help1', component: Help1Component}
        ]
      },
      {
        path: 'register', component: RegisterComponent
      }
      ,
      {
        path: 'users', loadChildren: () => import('./first/first.module').then(m => m.FirstModule)
      }
    ]
  },

  
]

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    AppDemoComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
