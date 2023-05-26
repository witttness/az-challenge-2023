import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EateriaCmsService {
  apiEndpoint = 'https://eateria.azurewebsites.net/api/menuitems?limit=999';
  // apiEndpoint = 'http://localhost:3000/api/menuitems?limit=999';

  constructor(private http: HttpClient) { }

  getRawData() {
    return this.http.get(this.apiEndpoint); //, { observe: "response", responseType: "blob", headers: new HttpHeaders({ "Accept": "text/plain" }) });
  }
}
