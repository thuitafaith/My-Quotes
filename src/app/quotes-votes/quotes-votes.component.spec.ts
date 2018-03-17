import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesVotesComponent } from './quotes-votes.component';

describe('QuotesVotesComponent', () => {
  let component: QuotesVotesComponent;
  let fixture: ComponentFixture<QuotesVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
