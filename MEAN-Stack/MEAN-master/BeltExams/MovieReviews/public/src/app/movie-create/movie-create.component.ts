import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  newMovie = {title: '', added_by: [''], rating: [''], review: ['']};
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }
  // create movie on post
  createMovie() {
    console.log('createMovie hit in movie-create.component.ts');
    // use the service to make a post request to the backend express server
    const tempObservable = this._httpService.postMovie(this.newMovie);
    tempObservable.subscribe((data: any) => {
      console.log('got a response', data);
      this.newMovie = {title: '', added_by: [''], rating: [''], review: ['']};
      // if no errors then go back to root of app
      if (!data.errors) {
        this._router.navigate(['/movies']);
      }
    });
  }
  // end create movie on post

  // cancel button
  cancel() {
    console.log('cancelling new movie');
    this._router.navigate(['/movies']);
  }
  // end cancel button

}
