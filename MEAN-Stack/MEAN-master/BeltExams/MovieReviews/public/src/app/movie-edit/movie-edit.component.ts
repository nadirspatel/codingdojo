import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie = {title: '', added_by: '', rating: '', review: ''};;
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
    console.log(params['id']);
    let tempObservable = this._httpService.getEditMoviebyID(params['id']);
    tempObservable.subscribe((data: any) => {
      this.movie = data;
    });
    });
  }

  // begin edit movie
  editMovie() {
    this._route.params.subscribe((params: Params) => {
    console.log('editMovie');
    // use the service to make a post request to the backend express server
    let tempObservable = this._httpService.editMovie(this.movie, params['id']);
    tempObservable.subscribe((data: any) => {
      console.log('got a response for edit movie', data);
      // any errors?
      if (!data.errors) {
        this._router.navigate(['/movies']);
      }
    });
  });
  }
  // end edit movie

  // cancel button
  cancel() {
    console.log('cancelling edit movie');
    this._router.navigate(['/movies']);
  }
  // end cancel button

}
