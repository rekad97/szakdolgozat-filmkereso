import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from '../app/shared/shared.module'



import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MypageComponent} from './mypage/mypage.component';
import {appRoutes} from '../app/routing/routes';
import {Jwt_interceptor} from './interceptors/jwt_interceptor';
// import {backendProvider} from './backend';
import { NotificationComponent } from './notification/notification.component';
import {Error_interceptor} from './interceptors/error_interceptor';
import { NavbarAfterComponent } from './navbar-after/navbar-after.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {MoviesService} from './shared/movie/movies.service';
import {MovieResolve} from '../movie-resolve';
import {Movie} from './models/movie';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MatTableModule} from '@angular/material/table';
import { MainLayoutComponent } from './main-layout/main-layout.component';


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
