import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from 'src/app/models/user.model'

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private http: HttpClient, private storage: Storage) {}

  getUsers() {
    return this.http.get<User>('https://api.github.com/users')
  }
}
