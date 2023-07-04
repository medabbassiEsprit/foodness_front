import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDashComponent } from './role-dash.component';

describe('RoleDashComponent', () => {
  let component: RoleDashComponent;
  let fixture: ComponentFixture<RoleDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
