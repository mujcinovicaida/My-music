import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../models/dialog-data';

@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html',
  })
  export class ModalComponent {
  
    constructor(
      public dialogRef: MatDialogRef<ModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
   
  
  }