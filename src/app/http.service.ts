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

  public getphotos() {
    const headers = new HttpHeaders({ 'Authorization': `Client-ID ${this.key}`});
    return this._http.get(`${this.url}/photos/`,{headers:headers})
  }
  public searchPhotos(query) {
    const headers = new HttpHeaders({ 'Authorization': `Client-ID ${this.key}`});
    return this._http.get(`${this.url}/search/photos/?query=${query}`,{headers:headers});
  }
  public userPhotos(username) {
    const headers = new HttpHeaders({ 'Authorization': `Client-ID ${this.key}`});
    return this._http.get(`${this.url}/users/${username}/photos`,{headers:headers});
  }
  public userProfile(username) {
    const headers = new HttpHeaders({ 'Authorization': `Client-ID ${this.key}`});
    return this._http.get(`${this.url}/users/${username}`,{headers:headers});
  }
}
