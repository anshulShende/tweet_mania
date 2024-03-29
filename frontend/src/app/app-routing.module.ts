import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './component/explore/explore.component';
import { HomeChildComponent } from './component/home-child/home-child.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  { 
    path: 'login',
    component: LoginComponent 
  },
  { 
    path: 'signup',
    component: SignupComponent 
  },
  { 
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'feed',
        component: HomeChildComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'explore',
        component: ExploreComponent,
      },
      {
        path: '**', 
        redirectTo: 'feed',
        pathMatch: 'prefix'
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: '/login',
  },
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
