import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/models/user.model'
import { GithubServiceService } from 'src/services/github-service.service'

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  users: User[] = []

  constructor(private gitHubService: GithubServiceService) {}
  ngOnInit(): void {
    this.gitHubService.getUsers().subscribe({
      next: (result) => {
        this.users = result
      },
    })
  }
}
