import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsReviewsComponent } from './app-details-reviews.component';

describe('AppDetailsReviewsComponent', () => {
  let component: AppDetailsReviewsComponent;
  let fixture: ComponentFixture<AppDetailsReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDetailsReviewsComponent]
    });
    fixture = TestBed.createComponent(AppDetailsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
