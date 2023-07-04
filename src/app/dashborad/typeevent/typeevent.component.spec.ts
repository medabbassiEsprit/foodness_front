import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeeventComponent } from './typeevent.component';

describe('TypeeventComponent', () => {
  let component: TypeeventComponent;
  let fixture: ComponentFixture<TypeeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
