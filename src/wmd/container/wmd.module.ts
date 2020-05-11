import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WmdComponent } from './wmd.component';
import { NotificationTableComponent } from '../common/notification-table/notification-table.component';
import { NotificationRowComponent } from '../common/notification-row/notification-row.component';
import { HeaderComponent } from './header/header.component';
import { WmdRoutingModule } from './wmd-routing.module';
import { CookieService } from 'ngx-cookie-service';
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
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NotesDialogComponent } from '../common/notes-dialog/notes-dialog.component';
import { UserConfigComponent } from './header/user-config/user-config.component';
import { PatientProfileComponent } from './views/profile/patient-profile/patient-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './views/profile/update/update.component';
import { NgxNotifierModule } from 'ngx-notifier';
import { LoginComponent } from './views/login/login.component';
import { DevicesComponent } from './views/devices/devices.component';
import { DeviceComponent } from './views/device/device.component';
import { RecordDetailsComponent, RecordChartComponent, RecordStatisticComponent } from './views/records/details';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { LatestRecordComponent } from './views/records/latest/latest-record.component';
import { LatestRecordsComponent } from './views/records/latest/latest-records.component';
import { RecordInfoModalComponent } from './views/records/modal';
import { RecordTypeNameDirective } from '../directives/record-type-name.directive';
import { RecordTypeIconComponent } from './views/record-type-icon/record-type-icon.component';
import { RecordNameDirective } from '../directives/record-name.directive';

@NgModule({
  declarations: [
    WmdComponent,
    NotificationTableComponent,
    NotificationRowComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    UserConfigComponent,
    PatientProfileComponent,
    UpdateComponent,
    LoginComponent,
    DevicesComponent,
    DeviceComponent,
    NotesDialogComponent,
    RecordDetailsComponent,
    RecordChartComponent,
    RecordStatisticComponent,
    LatestRecordsComponent,
    LatestRecordComponent,
    RecordInfoModalComponent,
    RecordTypeNameDirective,
    RecordNameDirective,
    RecordTypeIconComponent
  ],
  entryComponents: [
    UserConfigComponent, RecordInfoModalComponent
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
    HttpClientModule,
    NgxNotifierModule,
    NgbModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ChartsModule,
    TranslateModule.forRoot()
  ],
  providers: [
    {
      provide: MatBottomSheetRef,
      useValue: {}
    },
    {
      provide: MAT_BOTTOM_SHEET_DATA,
      useValue: []
    },
    {
      provide: CookieService,
      useValue: []
    },
    TranslateService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [
    WmdComponent
  ]
})
export class AppModule { }
