import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WmdComponent } from './wmd.component';
import { NotificationTableComponent } from '../common/notification-table/notification-table.component';
import { NotificationRowComponent } from '../common/notification-row/notification-row.component';
import { HeaderComponent } from './header/header.component';
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
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LineChartModule } from '@swimlane/ngx-charts';
import { FooterComponent } from './footer/footer.component';
import { NotesDialogComponent } from '../common/notes-dialog/notes-dialog.component';
import { UserConfigComponent } from './header/user-config/user-config.component';
import { PatientProfileComponent } from './views/profile/patient-profile/patient-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './views/profile/update/update.component';
import { NgxNotifierModule } from 'ngx-notifier';
import { LoginComponent } from './views/login/login.component';

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
    LoginComponent
  ],
  entryComponents: [
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
  ]
})
export class AppModule { }
