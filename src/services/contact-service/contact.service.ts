import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  sendEmail(data: any) {
    return this.http.post('http://localhost:3000/send', data).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
