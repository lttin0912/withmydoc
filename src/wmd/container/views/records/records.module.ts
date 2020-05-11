import { CUSTOM_ELEMENTS_SCHEMA,  NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';

import { RecordInfoModalComponent } from './modal';
import { RouterModule } from '@angular/router';
import { RecordTypeNameDirective } from 'src/wmd/directives/record-type-name.directive';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LatestRecordsComponent } from './latest/latest-records.component';
import { LatestRecordComponent } from './latest/latest-record.component';

@NgModule({
    imports: [
      CommonModule,
      ChartsModule,
      FormsModule,
      NgbModule,
      RouterModule,
      TranslateModule.forChild()
    ],
    declarations: [
    ],
    providers: [TranslateService],
    entryComponents: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecordsModule {}
