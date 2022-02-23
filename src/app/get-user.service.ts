import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { eachUser } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

// convert static data to Observable by using of()

  public testObsevable$ = of([{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }]);

  constructor(private http: HttpClient) { }

  public getUsersList(): Observable<eachUser[]> {
    return this.http.get<eachUser[]>('https://jsonplaceholder.typicode.com/posts');
  }

  public staticObserable(): Observable<eachUser[]> {
    return this.testObsevable$;
  }

  public getAvbc(): string {
    return "hiii";
  }
}
