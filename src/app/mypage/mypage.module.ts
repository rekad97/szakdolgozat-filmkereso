import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { MypageRoutingModule } from './mypage-routing.module';
import { MypageComponent } from './mypage.component';


@NgModule({
  declarations: [MypageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MypageRoutingModule
  ]
})
export class MypageModule { }
