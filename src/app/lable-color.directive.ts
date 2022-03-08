import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLableColor]'
})
export class LableColorDirective {

  @Input() public color: any = '';
  @Input() public cond: any = false;;
  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement)  
   }

   @HostListener('click') onClick() {
     if(this.cond){
      alert("hi")
     }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'blue';
 }
 @HostListener('mouseenter') onMouseEnter() {
  this.el.nativeElement.style.color = 'yellow';
}
   public ngOnInit() {
    console.log("color", this.color)
    this.el.nativeElement.style.color = this.color;
    //this.el.nativeElement.style.border = '2px solid red';
   }

}
