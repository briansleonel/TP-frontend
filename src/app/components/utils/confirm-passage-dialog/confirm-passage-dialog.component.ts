import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Passage } from 'src/app/models/passage';

@Component({
  selector: 'app-confirm-passage-dialog',
  templateUrl: './confirm-passage-dialog.component.html',
  styleUrls: ['./confirm-passage-dialog.component.css']
})
export class ConfirmPassageDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmPassageDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public res) { }

  ngOnInit(): void {
  }

  onClickNo(): void {
    this.dialogRef.close();
  }

}
