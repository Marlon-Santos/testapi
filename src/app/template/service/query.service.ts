import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const api = "http://localhost:8080/api";


@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) { }

  listApi(route: string) {

    return this.http.get(`${api}/${route}`);
  }
}
