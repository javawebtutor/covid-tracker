import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private _httpClient: HttpClient) { }

  public getCovidInfo(): Observable<any> {
    return this._httpClient.get("https://api.covid19api.com/summary");

  }


}
