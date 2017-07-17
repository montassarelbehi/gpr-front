import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnginComponent } from './list-engin.component';

describe('ListEnginComponent', () => {
  let component: ListEnginComponent;
  let fixture: ComponentFixture<ListEnginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
