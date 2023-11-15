import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styles: [``],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
})
export class ErrorDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit(): void {}
}
