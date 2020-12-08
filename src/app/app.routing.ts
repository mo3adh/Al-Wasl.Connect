import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DonorComponent } from './pages/donor/donor.component';
import { AuthGuard } from './auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreatejobComponent } from './pages/createjob/createjob.component';
import { ShowjobsComponent } from './pages/showjobs/showjobs.component';
import { IndivisualComponent } from './pages/indivisual/indivisual.component';
import { HonorwallComponent } from './pages/honorwall/honorwall.component';

export const AppRoutes: Routes = [
  { path: 'login',           component: LoginComponent},
  { path: 'register',           component: RegisterComponent},
  { path: 'donor',           component: DonorComponent},
  {path:'welcome', component:WelcomeComponent},
  {path:'createJob', component:CreatejobComponent},
  {path:'showJobs', component:ShowjobsComponent},
  {path:'indivisual', component:IndivisualComponent},
  {path:'honorwall', component:HonorwallComponent},
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },{
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'welcome'
  }
]
