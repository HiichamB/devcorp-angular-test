import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListUsersComponent } from './components/list-users/list-users.component'
import { UserDetailComponent } from './components/user-detail/user-detail.component'
import { DetailRepoComponent } from './components/detail-repo/detail-repo.component'

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },

  { path: 'users', component: ListUsersComponent },
  { path: 'users/:login', component: UserDetailComponent },
  { path: 'users/:login/:repo', component: DetailRepoComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
