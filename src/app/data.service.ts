import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl: string;
  public baseUrl: string;
  private headers: HttpHeaders;
  private httpOptions: object;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.httpOptions = { headers: this.headers };
  }

  getHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return { headers: this.headers };
  }

  getPointsTable() {
    return this.http.get(this.apiUrl + '/api/v1/points-table', {});
  }

  getTeams() {
    return this.http.get(this.apiUrl + '/api/v1/teams', {});
  }

  getPlayersOfTeam(id) {
    return this.http.get(this.apiUrl + '/api/v1/team/' + id + '/players', {});
  }
 }
