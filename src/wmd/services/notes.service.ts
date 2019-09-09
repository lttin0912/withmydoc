import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  data = new BehaviorSubject({});
  existingNotes = {};
  constructor() { 
    this.data.subscribe((notes)=> {
      this.existingNotes = notes;
    });
  }

  addNote(id, note) {
      if (this.data.value[id]) {
        this.data.next({
          ...this.existingNotes,
          [id]: [
            ...this.data.value[id],
            {
              id,
              note,
              time: new Date().getTime()
            }
          ]
        });
      }
      else {
        this.data.next({
          ...this.existingNotes,
          [id]: [{
            id,
            note,
            time: new Date().getTime()
          }]
        });
      }
   }

  getNotesByClientId(id) {
    return this.data.pipe(filter((note)=> {
      console.log({note, id: Object.keys(note)[0], requestedId: id});
      return Object.keys(note)[0] == id;
    }));
  }
}
