import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PatientProfileComponent } from './views/profile/patient-profile/patient-profile.component';
import { UpdateComponent } from './views/profile/update/update.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from '../interceptors/http.interceptor';

import { LoginComponent } from './views/login/login.component';
import {DevicesComponent} from './views/devices/devices.component';
import { LatestRecordsComponent } from './views/records/latest/latest-records.component';
import { RecordDetailsComponent } from './views/records/details';

const routes: Routes = [
  {
    path: '',
    component:  DashboardComponent
  },
  {
    path: 'dashboard',
    component:  DashboardComponent
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
  },
  {
    path: 'devices',
    component: DevicesComponent

  },
  {
    path: 'connect-device/ihealth',
    component: DevicesComponent

  },
  {
    path: 'records/latest',
    component: LatestRecordsComponent

  },
  {
      path: 'records/:type',
      component: RecordDetailsComponent
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
