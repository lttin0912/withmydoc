import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlertConfigComponent} from './views/alerts/alert-config/alert-config.component';
import {AlertsComponent} from './views/alerts/alerts/alerts.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PatientProfileComponent } from './views/profile/patient-profile/patient-profile.component';
import { UpdateComponent } from './views/profile/update/update.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from '../interceptors/http.interceptor';

const routes: Routes = [
  {
    path: '',
    component:  DashboardComponent
  },
  {
    path: 'alerts-config',
    component: AlertConfigComponent
  },
  {
    path: 'alerts',
    component: AlertsComponent
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
