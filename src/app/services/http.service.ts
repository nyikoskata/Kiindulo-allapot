import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookSearchModel } from '../models/book-search.model';
import { Observable, map } from 'rxjs';
import { BookModel } from '../models/book.model';
import { KonyvtariTagokModel } from '../models/konyvtari-tagok.model';
import { newMemberModel} from '../models/new-member.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  APIUrl = 'https://library.jedlik.cloud';

  constructor(private http: HttpClient) { }

  listBooks(searchModel: BookSearchModel): Observable<{totalCount: number, books: BookModel[]}> {
    let url = `${this.APIUrl}/books?from=${searchModel.from}&count=${searchModel.count}`;
    if (searchModel.author) {
      url += `&author=${searchModel.author}`;
    }
    if (searchModel.title) {
      url += `&title=${searchModel.title}`;
    }
    if (searchModel.isbn) {
      url += `&isbn=${searchModel.isbn}`;
    }
    return this.http.get<BookModel[]>(url, {observe: 'response'}).pipe(
      map( result => {
        if (result.body) {
          return {
            totalCount: Number(result.headers.get('x-total-count')), 
            books: result.body
          }
        } else {
          return {totalCount: 0, books: []}
        }
      }));
  }

  listUsers(name: string): Observable<KonyvtariTagokModel[]> {
    let url = `${this.APIUrl}/members/find?name=${name}`;
    return this.http.get<KonyvtariTagokModel[]>(url);
  }

  sendMember(member: newMemberModel): Observable<{message: string}> {
    return this.http.post<{message: string}>('https://library.jedlik.cloud/members/new', member);
  }
  
}
