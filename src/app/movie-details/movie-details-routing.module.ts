import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [{
  path: '',
  component: MovieDetailsComponent,
  
}
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MovieDetailsRoutingModule { }
