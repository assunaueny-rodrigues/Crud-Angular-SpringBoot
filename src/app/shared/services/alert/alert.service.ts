import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root',
})
export class AlertService {


  constructor(private readonly snackBar: MatSnackBar) {}

  showErrorMessage = (message: string): void  => {
    this.snackBar.open(message,'', { duration: 5000 });
  }

  showSuccessMessage = (message: string): void  => {
    this.snackBar.open(message,'', { duration: 5000 });
  }

}
