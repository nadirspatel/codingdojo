import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  postMovie(movieObj) {
    // actual post request happens here from form
    console.log('postMovie, movieObj is:', movieObj);
    return this._http.post('/api/movies', movieObj);
  }
  postReview(movieObj) {
    // actual post request happens here from form
    console.log('postReview, movieObj is:', movieObj);
    return this._http.post('/api/movies', movieObj);
  }
  getAllMovies() {
    console.log('getAllMovies hit');
    return this._http.get('/api/movies');
  }
  getMoviebyID(id) {
    console.log('getMoviebyID hit');
    return this._http.get('/api/movies/' + id);
  }
  // begin reviews
  getAllReviews(id) {
    console.log('getAllReviews by ID hit');
    return this._http.get('/api/movies/' + id);
  }
  getReviewsbyID(id) {
    console.log('getReviewsbyID hit in http.service.ts');
    return this._http.get('api/movies/' + id);
  }
  // end reviews
  getEditMoviebyID(id) {
    console.log('getEditMoviebyID hit');
    return this._http.get('/api/movies/detail/' + id);
  }
  editMovie(movieObj, objId) {
    console.log('updateMoviebyID hit', movieObj, objId);
    return this._http.put('/api/movies/edit/' + objId, movieObj);
  }
  getDetailMoviebyID(id) {
    console.log('getDetailMoviebyID hit');
    return this._http.get('/api/movies/detail/' + id);
  }
  deleteMovie(objId) {
    console.log('deleteMovie hit', objId);
    return this._http.delete('/api/movies/' + objId);
  }
  getIDforAddLike(id) {
    console.log('getIDforAddLike hit in http.service.ts', id);
    return this._http.get('/api/movies/detail/' + id);
  }

}
