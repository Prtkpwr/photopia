import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { HttpErrorResponse, HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'https://api.unsplash.com'
  key = '2ced0226035301673f472f5085d7a9543a495aa155352ce17bdc4a5610d1bac6'
  constructor(private _http: HttpClient) { }

  public getphotos(page) {
    const headers = new HttpHeaders({ 'Authorization': `Client-ID ${this.key}`});
    return this._http.get(`${this.url}/photos/?page=${page}`,{headers:headers})
  }
  public searchPhotos(query,page) {
    const headers = new HttpHeaders({ 'Authorization': `Client-ID ${this.key}`});
    return this._http.get(`${this.url}/search/photos/?query=${query}&page=${page}`,{headers:headers});
  }
  public userPhotos(username,page) {
    const headers = new HttpHeaders({ 'Authorization': `Client-ID ${this.key}`});
    return this._http.get(`${this.url}/users/${username}/photos?page=${page}`,{headers:headers});
  }
  public userProfile(username) {
    const headers = new HttpHeaders({ 'Authorization': `Client-ID ${this.key}`});
    return this._http.get(`${this.url}/users/${username}`,{headers:headers});
  }
}
