import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PatientProfileComponent } from './views/profile/patient-profile/patient-profile.component';
import { UpdateComponent } from './views/profile/update/update.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from '../interceptors/http.interceptor';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: '',
    component:  LoginComponent
  },
  {
    path: 'Dashboard',
    component:  LoginComponent
  },
  {
    path: 'patient-profile',
    pathMatch: 'full',
    component: PatientProfileComponent
  },
  {
    path: 'patient-profile/first-name/:firstName',
    component: UpdateComponent
  },
  {
    path: 'patient-profile/uuid/:uuid',
    component: UpdateComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true
    }
  ]
})
export class WmdRoutingModule { }
