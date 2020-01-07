import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie = {title: '', added_by: '', rating: '', review: ''};
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
    console.log(params['id']);
    let tempObservable = this._httpService.getDetailMoviebyID(params['id']);
    tempObservable.subscribe((data: any) => {
      this.movie = data;
    });
    });
  }

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

  // begin addlike movie from detail page
  addLike(objId){
    console.log('addLike hit in movie-detail.component.ts, going to tempobservable subscribe');
    let tempObservable = this._httpService.getIDforAddLike(objId);
    tempObservable.subscribe((data: any) => {
      console.log('addLike hit successfully in movie-detail.component.ts');
      this._router.navigate(['/movies']);
      if (!data.err) {
        this.ngOnInit();
      }
    });
  }
// This function will go to our movie service and run the getOption() function,
// passing in the option's id. Then we will receive data (the option's info)
// and save it to our voteoption variable. Otherwise we would get an error.


}
