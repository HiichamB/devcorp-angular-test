import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { User } from 'src/app/models/user.model'

@Injectable({
  providedIn: 'root',
})
export class GithubServiceService {
  apiUrl = 'https://api.github.com'
  authToken = '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'
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const url = `${this.apiUrl}/users`
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authToken}`,
    )
    return this.http.get<User[]>(url, { headers })

    //return this.http.get<User[]>(`${this.apiUrl}/users`)
  }
  getUser(username: string) {
    const url = `${this.apiUrl}/users/${username}`
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authToken}`,
    )
    return this.http.get(url, { headers })

    //return this.http.get(`${this.apiUrl}/users/${username}`)
  }

  getUserRepos(username: string) {
    const url = `${this.apiUrl}/users/${username}/repos`
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authToken}`,
    )
    return this.http.get(url, { headers })

    // return this.http.get(`${this.apiUrl}/users/${username}/repos`)
  }

  getUserFollowers(username: string) {
    const url = `${this.apiUrl}/users/${username}/followers`
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authToken}`,
    )
    return this.http.get(url, { headers })

    //return this.http.get(`${this.apiUrl}/users/${username}/followers`)
  }

  getRepo(username: string, repo: string) {
    const url = `${this.apiUrl}/repos/${username}/${repo}`
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authToken}`,
    )
    return this.http.get(url, { headers })

    //  return this.http.get(`${this.apiUrl}/repos/${username}/${repo}`)
  }
  getCommits(username: string, repo: string) {
    const url = `${this.apiUrl}/repos/${username}/${repo}/commits`
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authToken}`,
    )
    return this.http.get(url, { headers })

    //return this.http.get(`${this.apiUrl}/repos/${username}/${repo}/commits`)
  }
  getIssues(username: string, repo: string) {
    const url = `${this.apiUrl}/repos/${username}/${repo}/issues`
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authToken}`,
    )
    return this.http.get(url, { headers })

    //return this.http.get(`${this.apiUrl}/repos/${username}/${repo}/issues`)
  }
  getPullRequests(username: string, repo: string) {
    const url = `${this.apiUrl}/repos/${username}/${repo}/pulls`
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authToken}`,
    )
    return this.http.get(url, { headers })

    // return this.http.get(`${this.apiUrl}/repos/${username}/${repo}/pulls`)
  }
  getRepoStats(username: string, repo: string) {
    const url = `${this.apiUrl}/repos/${username}/${repo}/stats/code_frequency`

    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authToken}`,
    )
    return this.http.get(url, { headers })
  }
}
