import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsMoviesComponent } from './app-details-movies.component';

describe('AppDetailsMoviesComponent', () => {
  let component: AppDetailsMoviesComponent;
  let fixture: ComponentFixture<AppDetailsMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDetailsMoviesComponent]
    });
    fixture = TestBed.createComponent(AppDetailsMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
