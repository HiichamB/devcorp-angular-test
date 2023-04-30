import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { GithubServiceService } from 'src/services/github-service.service'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user!: any
  login: string = ''
  repos: any = []
  followers: any = []

  constructor(
    private gitHubService: GithubServiceService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.login = params['login']
      if (this.login) this.getUserDetail(this.login)
    })
  }
  getUserDetail(id: string) {
    this.gitHubService.getUser(id).subscribe({
      next: (result) => {
        this.user = result

        this.gitHubService.getUserRepos(this.user.login).subscribe({
          next: (repos) => {
            this.repos = repos
            console.log(this.repos)
          },
        })
        this.gitHubService.getUserFollowers(this.user.login).subscribe({
          next: (followers) => {
            this.followers = followers
          },
        })
      },
    })
  }
}
