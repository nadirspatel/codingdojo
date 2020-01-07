import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieReviewAddComponent } from './movie-review-add.component';

describe('MovieReviewAddComponent', () => {
  let component: MovieReviewAddComponent;
  let fixture: ComponentFixture<MovieReviewAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieReviewAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieReviewAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
