import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { KonyvtariTagokComponent } from './components/konyvtari-tagok/konyvtari-tagok.component';
import { NewMemberComponent } from './components/new-member/new-member.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'book-search', component: BookSearchComponent},
  {path: 'konyvtari-tagok', component: KonyvtariTagokComponent},
  {path: 'members/new', component: NewMemberComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
