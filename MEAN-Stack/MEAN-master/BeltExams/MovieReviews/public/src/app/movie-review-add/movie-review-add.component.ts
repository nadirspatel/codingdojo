import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-review-add',
  templateUrl: './movie-review-add.component.html',
  styleUrls: ['./movie-review-add.component.css']
})
export class MovieReviewAddComponent implements OnInit {
  movie = {added_by: [''], rating: [''], review: ['']};
  newReview = [];
  //movie = [];
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
    console.log(params['id']);
    let tempObservable = this._httpService.getReviewsbyID(params['id']);
    tempObservable.subscribe((data: any) => {
      console.log(data);
      this.movie = data;
    });
    });
  }

   // create movie on post
   createReview() {
    console.log('createReview hit in movie-review-add.component.ts');
    // use the service to make a post request to the backend express server
    let tempObservable = this._httpService.postMovie(this.movie);
    tempObservable.subscribe((data: any) => {
      console.log('got a response', data);
      this.movie.added_by = data.added_by;
      this.movie.rating = data.rating;
      this.movie.review = data.review;
      // any errors?
      if (!data.errors) {
        this._router.navigate(['/movies']);
      }
    });
  }
  //end create movie on post

  // begin delete movie from detail page
  delete(objId){
    console.log('adopting movie and deleting record...');
    let tempObservable = this._httpService.deleteMovie(objId);
    tempObservable.subscribe((data: any) => {
      console.log('record deleted successfully');
      this._router.navigate(['/movies']);
      if (!data.err) {
        this.ngOnInit();
      }
    });
  }
  // end delete movie from detail page


}
