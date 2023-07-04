import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticiperComponent } from './participer.component';

describe('ParticiperComponent', () => {
  let component: ParticiperComponent;
  let fixture: ComponentFixture<ParticiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
