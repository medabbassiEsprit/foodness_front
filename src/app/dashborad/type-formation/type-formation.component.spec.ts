import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeFormationComponent } from './type-formation.component';

describe('TypeFormationComponent', () => {
  let component: TypeFormationComponent;
  let fixture: ComponentFixture<TypeFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
