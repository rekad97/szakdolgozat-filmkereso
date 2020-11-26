import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth_and_register/auth.service';
import {User} from '../models/user';
import { MatDialog } from '@angular/material/dialog';
import { QrCodeModalComponent } from './qr-code-modal/qr-code-modal.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
currentUser: User;
  constructor(
    private authService: AuthService,
    private dialog: MatDialog
    ) {
    this.currentUser = this.authService.currentUserValue;
  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(QrCodeModalComponent, {
      width: '500px'
    });
  }
}
