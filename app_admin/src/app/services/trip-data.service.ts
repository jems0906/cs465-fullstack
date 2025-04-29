import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips`;

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  getTrips(): Observable<Trip[]> {
    console.log(`23: this.tripURL = ${this.tripUrl}`);
    return this.http.get<Trip[]>(this.tripUrl);
  }

  addTrip(formData: Trip): Observable<Trip> {
    console.log(`28: this.tripURL = ${this.tripUrl}`);
    console.log(`29: formData = ${formData}`);
    return this.http.post<Trip>(this.tripUrl, formData);
  }

  getTrip(tripCode: string): Observable<Trip[]> {
    console.log(`32: this.tripURL = ${this.tripUrl}`);
    console.log(`33: tripCode = ${tripCode}`);
    return this.http.get<Trip[]>(`${this.tripUrl}/${tripCode}`);
  }

  updateTrip(formData: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.tripUrl}/${formData.code}`, formData);
  }
private handleError(error: any): Promise<any> {
  console.error('Something has gone wrong', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
  public login(user: User): Promise<AuthResponse> { 
    return this.makeAuthApiCall('login', user); 
    } 
    public register(user: User): Promise<AuthResponse> { 
    return this.makeAuthApiCall('register', user); 
    } 
    private makeAuthApiCall(urlPath: string, user: User): 
    Promise<AuthResponse> { 
    const url: string = `${this.apiBaseUrl}/${urlPath}`; 
    const request$ = this.http.post<AuthResponse>(url, user);
    return lastValueFrom(request$)
      .then(response => response) 
      .catch(this.handleError); 
  }
}