import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeFormationComponent } from './update-type-formation.component';

describe('UpdateTypeFormationComponent', () => {
  let component: UpdateTypeFormationComponent;
  let fixture: ComponentFixture<UpdateTypeFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
