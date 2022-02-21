import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Help1Component } from './help1.component';

describe('Help1Component', () => {
  let component: Help1Component;
  let fixture: ComponentFixture<Help1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Help1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Help1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
