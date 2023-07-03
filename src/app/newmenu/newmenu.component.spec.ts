import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMenuComponent } from './newmenu.component';

describe('NewmenuComponent', () => {
  let component: NewMenuComponent;
  let fixture: ComponentFixture<NewMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
