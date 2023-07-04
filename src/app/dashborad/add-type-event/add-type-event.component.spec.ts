import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeEventComponent } from './add-type-event.component';

describe('AddTypeEventComponent', () => {
  let component: AddTypeEventComponent;
  let fixture: ComponentFixture<AddTypeEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
