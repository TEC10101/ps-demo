import { Injectable } from '@angular/core';
import { IUserSettings } from './user-settings.interface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }
  
  getSubscriptionTypes() {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }
  postUserSettingsForm(userSettings: IUserSettings): Observable<any> {
    
    return this.http.post('https://putsreq.com/3BR2k1WjlxNu7tBus8YE', userSettings);
    
    // return of(userSettings)
  }
}
