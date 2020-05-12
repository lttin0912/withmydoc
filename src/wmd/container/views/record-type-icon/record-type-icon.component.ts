import { Component, ElementRef, Input, OnChanges, OnDestroy, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MetadataService } from 'src/wmd/services/meta-data.service';

@Component({
  selector: 'wmd-record-type-icon',
  templateUrl: 'record-type-icon.component.html',
  styleUrls: ['record-type-icon.scss']
})
export class RecordTypeIconComponent implements OnInit, OnDestroy {
  @Input() type: string;

  icon: string;

  subscription: Subscription;

  constructor(
    private el: ElementRef,
    private metadataService: MetadataService) { }

  ngOnInit() {
    this.getIcon();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private getIcon() {    
      this.icon = this.metadataService.typeIcon(this.type); 
  }
}
