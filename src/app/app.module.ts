import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScrollEventModule } from 'ngx-scroll-event';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GridViewComponent,
    ProfileViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LazyLoadImageModule,
    ScrollEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
