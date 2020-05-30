import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../modals/user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<IUser>('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: number) {
    return this.http.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
