import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildContactTwoComponent } from './child-contact-two.component';

describe('ChildContactTwoComponent', () => {
  let component: ChildContactTwoComponent;
  let fixture: ComponentFixture<ChildContactTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildContactTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildContactTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
