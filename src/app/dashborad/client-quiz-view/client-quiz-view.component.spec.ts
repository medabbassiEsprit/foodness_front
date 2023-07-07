import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientQuizViewComponent } from './client-quiz-view.component';

describe('ClientQuizViewComponent', () => {
  let component: ClientQuizViewComponent;
  let fixture: ComponentFixture<ClientQuizViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientQuizViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientQuizViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
