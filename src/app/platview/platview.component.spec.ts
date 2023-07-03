import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatviewComponent } from './platview.component';

describe('PlatviewComponent', () => {
  let component: PlatviewComponent;
  let fixture: ComponentFixture<PlatviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
