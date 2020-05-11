import { Directive, OnChanges, Input, ElementRef } from '@angular/core';
import { MetadataService } from '../services/meta-data.service';

@Directive({
  selector: '[wmdRecordTypeName]'
})
export class RecordTypeNameDirective implements OnChanges {
  @Input() wmdRecordTypeName: string;

  constructor(private el: ElementRef, private metadataService: MetadataService) { }

  ngOnChanges() {
    this.getTranslation();
  }

  private getTranslation() {
    this.metadataService.typeName(this.wmdRecordTypeName).subscribe(
      value => {
        this.el.nativeElement.innerHTML = value;
      },
      () => {
        return `${this.wmdRecordTypeName}`;
      }
    );
  }
}
