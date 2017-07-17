/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListPanneComponent } from './list-panne.component';

describe('ListPanneComponent', () => {
  let component: ListPanneComponent;
  let fixture: ComponentFixture<ListPanneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPanneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
