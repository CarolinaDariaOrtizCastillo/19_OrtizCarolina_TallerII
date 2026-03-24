import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private apiUrl = 'https://dummyjson.com/users'; //BASE URL FOR THE API

    constructor( private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.apiUrl)
  }
}
