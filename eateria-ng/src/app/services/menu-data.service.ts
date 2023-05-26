import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {
  apiEndpoint = '/assets/menu-data.csv';

  constructor(private http: HttpClient) { }

  getRawData() {
    return this.http.get(this.apiEndpoint, { responseType: 'text' });
  }
}
