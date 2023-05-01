import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ListUsersComponent } from './components/list-users/list-users.component'
import { CardUserComponent } from './components/shared/card-user/card-user.component'
import { HttpClientModule } from '@angular/common/http'
import { UserDetailComponent } from './components/user-detail/user-detail.component'
import { FollowerCardComponent } from './components/shared/follower-card/follower-card.component'
import { CardRepoComponent } from './components/shared/card-repo/card-repo.component'
import { ReactiveFormsModule } from '@angular/forms'
import { DetailRepoComponent } from './components/detail-repo/detail-repo.component'

@NgModule({
  declarations: [
    AppComponent,

    ListUsersComponent,
    CardUserComponent,
    UserDetailComponent,
    FollowerCardComponent,
    CardRepoComponent,
    DetailRepoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
