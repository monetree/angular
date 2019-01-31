import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { 
    path: '',
    component: HomeComponent
   },
  {
    path: 'posts',
    component: PostsComponent
   },
  { 
    path: 'users',
    component: UserComponent
  },
  // { 
  //   path: 'users/:id/:username',
  //   component: UserComponent
  // },
  { 
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
