import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MypageComponent } from './mypage.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: MypageComponent,
  
}
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MypageRoutingModule { }
