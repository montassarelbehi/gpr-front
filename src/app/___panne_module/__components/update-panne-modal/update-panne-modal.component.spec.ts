import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePanneModalComponent } from './update-panne-modal.component';

describe('UpdatePanneModalComponent', () => {
  let component: UpdatePanneModalComponent;
  let fixture: ComponentFixture<UpdatePanneModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePanneModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePanneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
