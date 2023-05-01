import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

import { User } from 'src/app/models/user.model'
import { GithubServiceService } from 'src/services/github-service.service'

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  AllUsers: User[] = []
  users: User[] = []
  searchControl!: FormControl
  chart: any
  constructor(private gitHubService: GithubServiceService) {}
  ngOnInit(): void {
    this.searchControl = new FormControl('')

    this.gitHubService.getUsers().subscribe({
      next: (result) => {
        this.AllUsers = result
        this.users = result
      },
    })
  }
  onSearchChange(event: any) {
    this.users = this.AllUsers.filter((data: User) =>
      data.login.includes(event),
    )
  }
}
