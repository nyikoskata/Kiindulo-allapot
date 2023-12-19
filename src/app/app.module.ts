import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { KonyvtariTagokComponent } from './components/konyvtari-tagok/konyvtari-tagok.component';
import { NewMemberComponent } from './components/new-member/new-member.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookSearchComponent,
    KonyvtariTagokComponent,
    NewMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
