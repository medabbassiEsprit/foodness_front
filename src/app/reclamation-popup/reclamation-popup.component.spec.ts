import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationPopupComponent } from './reclamation-popup.component';

describe('ReclamationPopupComponent', () => {
  let component: ReclamationPopupComponent;
  let fixture: ComponentFixture<ReclamationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
