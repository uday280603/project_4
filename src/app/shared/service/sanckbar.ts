import { inject, Service } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Service()
export class Sanckbar {
  snackbar = inject(MatSnackBar);

  openSnackBar(msg: string) {
    this.snackbar.open(msg, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1000,
    });
  }
}
