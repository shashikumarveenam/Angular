import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, concat, concatMap, fromEvent, map, merge, mergeMap, min, Observable, of, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
 userAge = '';

public dynamicForm = this.fb.group({
  username: this.fb.array([])
})
public usernameArray = this.dynamicForm.get('username') as FormArray;

public addName() {
  this.usernameArray.push(new FormControl(null, [Validators.required, Validators.minLength(3)]));
  //console.log(this.usernameArray)
}

public getUsername() {
 // console.log("usernameArray", this.usernameArray)
  return this.usernameArray;
}


  public item = [{'name':'sshashi', 'amount': 1000}, 
  {'name':'zshashi', 'amount': 2000},
  {'name':'shashi', 'amount': 2000}, 
  {'name':'rishi', 'amount': 4000},
  {'name':'rishi', 'amount': 5000}];

  public b = [0, 7, 5, 8];
  public d = ['a', 'd', 'c'];
    public a = [{}]
    public c = ['z', 'b', 'c', 'w', 's', 'e'];

    constructor(private fb: FormBuilder) { }

    // registartionForm = this.fb.group({
    //   age: [''],
    //   dynamicfb: this.fb.array([])
    // })

    public getControls() {
      // let arr = ["mobile", "age", "gender"];
      // let a = this.registartionForm.get('dynamicfb') as FormArray;
      // a.push(this.fb.control(arr))
      // console.log(this.registartionForm)
    }
    //public sortArray = ['a', 'b','h','c'];
    public sortArray = [{'name':'xhashi', 'amount': 1000}, 
  {'name':'zshashi', 'amount': 6000},
  {'name':'shashi', 'amount': 2000}, 
  {'name':'rishi', 'amount': 4000},
  {'name':'rishi', 'amount': 1000}];
  //public list = [0];
  public generate(len = 5) {
    const list = [0];
    //if (len <= 0 || parseInt(len) === NaN) return console.log('invalid input');
    let i = 0;
    let start;
    while (i <= len) {
      start = list[list.length - 1];
      if (list.slice(0, list.length - 1).includes(start)) {
        let t = i - 1;
        let count = 1;
       // console.log(t)
        while (t >= 0) {
          console.log(list[t]+'------'+ start+'----'+ count)
          if (list[t] === start) {
            list.push(count);
            break;
          }
          count++;
          t--;
        }
      } else {
        list.push(0);
      }
      i++;
    }
   //console.log(list.join(' '));
   return list;
 } 
  public ngOnInit() {
    //console.log(this.generate(7));
    let arrayList = [5,9,15,11,55];
    let goal = 14;
    let closest = arrayList.reduce(function(prev, curr){
return Math.abs(curr-goal) < Math.abs(prev-goal) ? curr : prev;
    })
    //console.log("closest", closest)
    let x = [1,2,3];
    let z = [...x, 4];
    //console.log(z)
    let a = [1,2,3,[5,6]];
    //let b = a;
    let b = JSON.parse(JSON.stringify(a))
    b[3][0] = 100;
    //console.log(a, b)
//     this.sortArray.sort((a,b)=>{
//       if(a.amount === b.amount){
        
// if(a.name > b.name){
// return 1
// }else{
//   return -1
// }
//       }
//       if(a.amount > b.amount){
// return 1
//       }else{
//         return -1;
//       }
//     });
//     //console.log(this.sortArray)
//     this.getUsername();
    
//     let looparray = [1,2,5,7,10];
//     for(let k in looparray){
//       //console.log("k---",looparray[k])
//     }
//     this.item = this.item.filter((value, index, self) =>
//   index === this.item.findIndex((t) => 
//     t.name === value.name
//   )
// )

// const c = this.b.reduce((from, to) =>{
//   return from + to;
// })
// let sortedArray: number[] = this.b.sort((n1,n2) =>{
//   if(n1 > n2){
//     return 1;
//   }
//   if(n1 < n2){
//     return -1;
//   }
//   return 0;
// });
// //console.log(sortedArray)
// let s =  this.c.sort((n1, n2)=> {
//   if(n1 > n2){
//     return 1;
//   }
//   if(n1 < n2){
//     return -1;
//   }
//   return 0;
// })
// //let k = Object.assign({}, this.d);
// //console.log(this.d)
// let ss = this.d.reduce((f, s)=> ({
//   ...f, [s]:s
// }),{})
// let aa = {'s':'s', 'a':'a', 'l':'l'};
// const ad = Object.keys(aa)
// const zz = ['f', 'h', 'k'];
// const dd= [{'name':'shashi', 'amount': 1000}, {'name':'rishi', 'amount': 1000}];
// const ab = dd.filter((r) => { 
//   return r.name==='shashi'
// });

// const ff = [1, 2, 5, 6, 10];
// const jj = ff.filter(r=> r%2 === 0);

// const q = [1, 3, 2, 6, 10, 20];
// //console.log(q.slice(2, 6))
// //console.log(q)
// let a$ = of([1, 2, 3]);
// let b$ = of([5, 6, 7])
// //
// let ab$ = a$.pipe(mergeMap((r)=> {
//   return b$.pipe(map(l=> l))
// }))
// let x$ = merge(a$, b$);
// x$.subscribe(r=> console.log(r))

// const searchText$: Observable<string> = 
//       fromEvent<any>(document, 'keyup')
//     .pipe(
//         map(event => event.target.value),
//     );
//     searchText$.subscribe(r => console.log(r));
//     let obs$ = new BehaviorSubject('0');
//     let ddd = obs$.asObservable();
//     obs$.subscribe(r=> console.log(r))
//     obs$.subscribe(r=> console.log(r))
//     obs$.next('2')
//     obs$.subscribe(r=> console.log(r))
// console.log("get---",obs$.getValue())

  }

  
  
}
