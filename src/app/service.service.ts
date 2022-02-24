import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public login$: Observable<any> = of([{'status': 'success', 'msg': 'login succesfully.'}]);

  constructor() { }

  getLogin(obj: any): Observable<any>{
    console.log(obj)
    return this.login$;
  }
}
