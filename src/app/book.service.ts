import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IBook} from './i-book';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:3000/books';
  constructor(private http: HttpClient) { }

  getContents(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.API_URL}`);
  }
  getById(id: number): Observable<IBook> {
    return this.http.get<IBook>(`${this.API_URL}/${id}`);
  }
}
