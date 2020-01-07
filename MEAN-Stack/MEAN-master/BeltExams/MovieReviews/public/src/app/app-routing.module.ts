import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieReviewListComponent } from './movie-review-list/movie-review-list.component';
import { MovieReviewAddComponent } from './movie-review-add/movie-review-add.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent),
  {path: 'movies', component: MovieListComponent},
  {path: 'movies/:id', component: MovieReviewListComponent},
  {path: 'movies/:id/review', component: MovieReviewAddComponent},
  {path: 'movies/detail/:id', component: MovieDetailComponent},
  {path: 'movies/create', component: MovieCreateComponent},
  {path: 'movies/edit/:id', component: MovieEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
