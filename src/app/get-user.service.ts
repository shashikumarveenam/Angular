import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { eachUser } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http: HttpClient) { }

  public getUsersList(): Observable<eachUser[]> {
    return this.http.get<eachUser[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
