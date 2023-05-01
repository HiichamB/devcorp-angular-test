import { AfterViewInit, Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { GithubServiceService } from 'src/services/github-service.service'
import { Chart } from 'chart.js/auto'
import { HttpClient } from '@angular/common/http'
import { enUS } from 'date-fns/locale'

@Component({
  selector: 'app-detail-repo',
  templateUrl: './detail-repo.component.html',
  styleUrls: ['./detail-repo.component.scss'],
})
export class DetailRepoComponent implements OnInit {
  login: string = ''
  repo: string = ''

  commits!: any
  issues!: any
  pullRequests!: any
  reposData: any
  reposStats: any = []
  chart: any
  constructor(
    private gitHubService: GithubServiceService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.login = params['login']
      this.repo = params['repo']

      this.gitHubService.getRepo(this.login, this.repo).subscribe({
        next: (repoData: any) => {
          this.reposData = repoData

          // this.gitHubService.getCommits(this.login, this.repo).subscribe({
          //   next: (commits) => {
          //     this.commits = commits
          //   },
          // })
          // this.gitHubService.getIssues(this.login, this.repo).subscribe({
          //   next: (issues) => {
          //     this.issues = issues
          //   },
          // })
          // this.gitHubService.getPullRequests(this.login, this.repo).subscribe({
          //   next: (pulls) => {
          //     this.pullRequests = pulls
          //   },
          // })
          this.gitHubService.getRepoStats(this.login, this.repo).subscribe({
            next: (repoStats) => {
              this.reposStats = repoStats
              if (this.reposStats) this.createChart2()
            },
          })
        },
      })
    })
  }

  createChart2() {
    this.chart = new Chart('MyChart', {
      type: 'line',
      data: {
        labels: this.reposStats.map((d: any) =>
          new Date(d[0] * 1000).toLocaleDateString(),
        ),
        datasets: [
          {
            label: 'Additions',
            data: this.reposStats.map((d: any) => d[1]),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Deletions',
            data: this.reposStats.map((d: any) => d[2]),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: { ticks: { autoSkip: true, maxRotation: 0 } },
          y: { beginAtZero: true },
        },
      },
    })
  }
}
