import { AfterViewInit, Component, Input, OnInit } from '@angular/core'
import { GithubServiceService } from 'src/services/github-service.service'

@Component({
  selector: 'app-card-repo',
  templateUrl: './card-repo.component.html',
  styleUrls: ['./card-repo.component.scss'],
})
export class CardRepoComponent implements OnInit, AfterViewInit {
  @Input() userName: string = ''
  @Input() repoName: string = ''

  @Input() description: string = ''
  @Input() stars: number = 0

  commits!: any
  issues!: any
  pullRequests!: any

  constructor(private gitHubService: GithubServiceService) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.gitHubService.getCommits(this.userName, this.repoName).subscribe({
      next: (commits) => {
        this.commits = commits
      },
    })
    this.gitHubService.getIssues(this.userName, this.repoName).subscribe({
      next: (issues) => {
        this.issues = issues
      },
    })
    this.gitHubService.getPullRequests(this.userName, this.repoName).subscribe({
      next: (pullRequests) => {
        this.pullRequests = pullRequests
      },
    })
  }
}
