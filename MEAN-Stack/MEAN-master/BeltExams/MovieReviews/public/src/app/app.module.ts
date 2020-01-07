import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';

import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieReviewListComponent } from './movie-review-list/movie-review-list.component';
import { MovieReviewAddComponent } from './movie-review-add/movie-review-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MovieCreateComponent,
    MovieReviewListComponent,
    MovieReviewAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
