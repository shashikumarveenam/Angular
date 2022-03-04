import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { loginInterface } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public login$: Observable<any> = of([{'status': 'success', 'msg': 'login succesfully.'}]);
  public testSubject$: any = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) { 
    if (localStorage.getItem("username")) {
      this.subject.next(localStorage.getItem("username"));
    }
  }

  
  //public subject = new BehaviorSubject(123);

  public subject: any = new BehaviorSubject<any>(null);

  public setUserData(obj: string) {
    this.subject.next(obj);

  }

  getLogin(obj: any): Observable<any>{
    // console.log(obj)
    // return this.login$;
    return this.http.post<any>('https://certifiedghana.com/user/login_action', obj);
  }
}
