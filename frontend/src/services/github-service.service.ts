import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { User } from 'src/app/models/user.model'

@Injectable({
  providedIn: 'root',
})
export class GithubServiceService {
  apiUrl = 'https://api.github.com'
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`)
  }
  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/users/${username}`)
  }

  getUserRepos(username: string) {
    return this.http.get(`${this.apiUrl}/users/${username}/repos`)
  }

  getUserFollowers(username: string) {
    return this.http.get(`${this.apiUrl}/users/${username}/followers`)
  }

  getRepo(username: string, repo: string) {
    return this.http.get(`${this.apiUrl}/repos/${username}/${repo}`)
  }
}
