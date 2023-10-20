import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private seller: SellerService) { }
  showLogin = false;
  authError: string = '';

  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUp(data: SignUp) {
    this.seller.userSignup(data)
  }
  login(data: SignUp) {
    this.authError = "";
    console.warn(data);
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = "Please enter valid Email or Password"
      }
    })
  }
  openSignUp() {
    this.showLogin = false
  }
  openLogin() {
    this.showLogin = true
  }
}
