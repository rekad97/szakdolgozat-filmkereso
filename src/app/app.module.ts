import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../app/shared/shared.module'
import { AppComponent } from './app.component';
import {appRoutes} from '../app/routing/routes';
import {Jwt_interceptor} from './interceptors/jwt_interceptor';
import {Error_interceptor} from './interceptors/error_interceptor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    FlexLayoutModule,
    NgbModule,
    StoreModule.forRoot({}, {}),
    SharedModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Jwt_interceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: Error_interceptor, multi: true},
],
  bootstrap: [AppComponent]
})
export class AppModule { }
