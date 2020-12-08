import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsComponent } from './movie-details.component';

@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MovieDetailsRoutingModule
  ]
})
export class MovieDetailsModule { }
