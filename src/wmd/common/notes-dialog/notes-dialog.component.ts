import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { NotesService } from 'src/wmd/services/notes.service';

@Component({
  selector: 'wmd-notes-dialog',
  templateUrl: './notes-dialog.component.html',
  styleUrls: ['./notes-dialog.component.scss']
})
export class NotesDialogComponent implements OnInit {
  note: string;
  
  notes: any;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notesService: NotesService
  ) {
  }

  addNote() {
    this.notesService.addNote(this.data.id, this.note);
    this.note = '';
  }

  ngOnInit() {
    this.notesService.data.subscribe((notes)=> {
      this.notes = notes;
    });
  }
}
