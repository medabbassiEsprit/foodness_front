import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTypeFormationComponent } from './view-type-formation.component';

describe('ViewTypeFormationComponent', () => {
  let component: ViewTypeFormationComponent;
  let fixture: ComponentFixture<ViewTypeFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTypeFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTypeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
