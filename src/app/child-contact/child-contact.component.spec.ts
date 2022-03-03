import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildContactComponent } from './child-contact.component';

describe('ChildContactComponent', () => {
  let component: ChildContactComponent;
  let fixture: ComponentFixture<ChildContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
