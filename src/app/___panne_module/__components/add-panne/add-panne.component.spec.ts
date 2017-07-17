/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddPanneComponent } from './add-panne.component';

describe('AddPanneComponent', () => {
  let component: AddPanneComponent;
  let fixture: ComponentFixture<AddPanneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPanneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
