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
  createPost(post: Partial<IBook>): Observable<IBook> {
    return this.http.post<IBook>(`${this.API_URL}`, post);
  }
  updatePost(post: Partial<IBook>): Observable<IBook> {
    const r = confirm('Ban chac chan muon cap nhat?\n Chon OK hoac Cancel!');
    if (r) {
      return this.http.put<IBook>(`${this.API_URL}/${post.id}`, post);
    }
  }
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
