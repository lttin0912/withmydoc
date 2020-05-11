import { Directive, OnChanges, Input, ElementRef } from '@angular/core';
import { MetadataService } from '../services/meta-data.service';

@Directive({
  selector: '[wmdRecordName]'
})
export class RecordNameDirective implements OnChanges {
  @Input() wmdRecordName: string;

  constructor(private el: ElementRef, private metadataService: MetadataService) { }

  ngOnChanges() {
    this.getTranslation();
  }

  private getTranslation() {
    this.metadataService.inputName(this.wmdRecordName).subscribe(
      value => {
        this.el.nativeElement.innerHTML = value;
      },
      () => {
        return `${this.wmdRecordName}`;
      }
    );
  }
}
