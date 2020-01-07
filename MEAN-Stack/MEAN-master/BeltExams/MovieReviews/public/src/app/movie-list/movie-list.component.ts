import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies = []; // now movies is defined for movie-list-component.html
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    // make a get request for all movies in database
    let tempObservable = this._httpService.getAllMovies();
    tempObservable.subscribe((data: any) => {
      console.log('got a response reponse', data);
      this.movies = data;
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
