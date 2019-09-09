import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WmdComponent } from './wmd.component';
import { NotificationTableComponent } from '../common/notification-table/notification-table.component';
import { NotificationRowComponent } from '../common/notification-row/notification-row.component';
import { HeaderComponent } from './header/header.component';
import { AlertConfigComponent } from './views/alerts/alert-config/alert-config.component';
import { WmdRoutingModule } from './wmd-routing.module';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AlertsComponent } from './views/alerts/alerts/alerts.component';
import { AlertSessionDialogComponent } from './views/alerts/alert-session-dialog/alert-session-dialog.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LegendComponent } from './views/dashboard/legend/legend.component';
import { PatientsQuickGlanceGridComponent } from './views/dashboard/patients-quick-glance-grid/patients-quick-glance-grid.component';
import {
  PatientQuickGlanceTileComponent
} from './views/dashboard/patients-quick-glance-grid/patient-quick-glance-tile/patient-quick-glance-tile.component';
import {
  PatientVitalsComponent
} from './views/dashboard/patients-quick-glance-grid/patient-quick-glance-tile/patient-vitals/patient-vitals.component';

import {
  PatientVitalsTableComponent
} from './views/dashboard/patients-quick-glance-grid/patient-quick-glance-tile/patient-vitals/patient-vitals-table/patient-vitals-table.component';

import {
  PatientMetricsChartComponent
} from './views/dashboard/patients-quick-glance-grid/patient-quick-glance-tile/patient-metrics-chart/patient-metrics-chart.component';

import { LineChartModule } from '@swimlane/ngx-charts';
import { AlertConfigDialogComponent } from './views/alerts/alert-config-dialog/alert-config-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { NotesDialogComponent } from '../common/notes-dialog/notes-dialog.component';
import { UserConfigComponent } from './header/user-config/user-config.component';
import { PatientProfileComponent } from './views/profile/patient-profile/patient-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './views/profile/update/update.component';
import { NgxNotifierModule } from 'ngx-notifier';

@NgModule({
  declarations: [
    WmdComponent,
    NotificationTableComponent,
    NotificationRowComponent,
    HeaderComponent,
    AlertConfigComponent,
    AlertsComponent,
    AlertSessionDialogComponent,
    DashboardComponent,
    LegendComponent,
    PatientsQuickGlanceGridComponent,
    PatientQuickGlanceTileComponent,
    PatientVitalsComponent,
    PatientVitalsTableComponent,
    PatientMetricsChartComponent,
    AlertConfigDialogComponent,
    FooterComponent,
    NotesDialogComponent,
    UserConfigComponent,
    PatientProfileComponent,
    UpdateComponent
  ],
  entryComponents: [
    AlertSessionDialogComponent,
    PatientVitalsComponent,
    AlertConfigDialogComponent,
    NotesDialogComponent,
    AlertConfigComponent,
    UserConfigComponent
  ],
  imports: [
    BrowserModule,
    WmdRoutingModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LineChartModule,
    HttpClientModule,
    NgxNotifierModule
  ],
  providers: [
    {
      provide: MatBottomSheetRef,
      useValue: {}
    },
    {
      provide: MAT_BOTTOM_SHEET_DATA,
      useValue: []
    }
  ],
  bootstrap: [
    WmdComponent
  ],
  exports: [
    PatientsQuickGlanceGridComponent,
    PatientQuickGlanceTileComponent
  ]
})
export class AppModule { }
