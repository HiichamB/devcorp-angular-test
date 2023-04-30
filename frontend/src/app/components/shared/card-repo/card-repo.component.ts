import { Component, Input, OnInit } from '@angular/core'
import { GithubServiceService } from 'src/services/github-service.service'

@Component({
  selector: 'app-card-repo',
  templateUrl: './card-repo.component.html',
  styleUrls: ['./card-repo.component.scss'],
})
export class CardRepoComponent implements OnInit {
  @Input() userName: string = ''
  @Input() repo: string = ''
  repoData!: any

  constructor(private gitHubService: GithubServiceService) {}

  ngOnInit(): void {
    this.gitHubService.getRepo(this.userName, this.repo).subscribe({
      next: (repoData) => {
        console.log(repoData)
        this.repoData = repoData
      },
    })
  }
}
