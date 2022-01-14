import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/services/local-service.service';

@Component({
  selector: 'or-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent implements OnInit {
  constructor(private router: Router, private localService: LocalService) {}

  ngOnInit(): void {}

  goToConfirmOTP() {
    const obj = {
      status: true,
      data: {
        id: 1,
        token: 'Dimeloooooo',
        otpCode: '12345',
      },
    };
    this.localService.setJsonValue('key', obj);
    this.router.navigate(['preApproved/confirm-otp']);
  }
}
