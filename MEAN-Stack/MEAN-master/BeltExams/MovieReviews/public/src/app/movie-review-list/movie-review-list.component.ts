import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-review-list',
  templateUrl: './movie-review-list.component.html',
  styleUrls: ['./movie-review-list.component.css']
})
export class MovieReviewListComponent implements OnInit {
  movie = {title: '', added_by: [''], rating: [''], review: ['']};
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
    console.log(params['id']);
    let tempObservable = this._httpService.getMoviebyID(params['id']);
    tempObservable.subscribe((data: any) => {
      this.movie = data;
    });
    });
  }

  delete(objId){
    console.log('deleting record');
    let tempObservable = this._httpService.deleteMovie(objId);
    tempObservable.subscribe((data: any) => {
      console.log('record deleted successfully');
      if (!data.err) {
        this.ngOnInit();
      }
    });
  }

}
