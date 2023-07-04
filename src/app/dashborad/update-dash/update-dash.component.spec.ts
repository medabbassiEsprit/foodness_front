import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDashComponent } from './update-dash.component';

describe('UpdateDashComponent', () => {
  let component: UpdateDashComponent;
  let fixture: ComponentFixture<UpdateDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
