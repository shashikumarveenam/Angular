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
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { ChildContactComponent } from './child-contact/child-contact.component';
import { ChildContactTwoComponent } from './child-contact-two/child-contact-two.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { MobilePipe } from './mobile.pipe';
import { LableColorDirective } from './lable-color.directive';


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
      },
      {
        path: 'contact', component: ContactComponent
      },
      {
        path: 'pipes-demo', component: PipeDemoComponent
      }
    ],
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
    ContactComponent,
    ChildContactComponent,
    ChildContactTwoComponent,
    PipeDemoComponent,
    MobilePipe,
    LableColorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
