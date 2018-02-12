import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown';
import { IUser } from '../../interfaces/user';
import { AuthService, TOKEN_NAME } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  errorMessage: string = '';
  navbarBrandTitle: string = 'FoodieJourney';
  loggedIn: boolean = false;
  user: IUser;
  loginForm: FormGroup;
  
  constructor(private _formBuilder: FormBuilder, private _authService: AuthService, private _router: Router) {
    this.createLoginForm();

    if (this._authService.isLoggedIn()) {
      this.user = this._authService.getUser();
      this.loggedIn = true;
    } else {
      this.user = null;
    }
  }

  ngOnInit() {
  }

  createLoginForm(): void {
    this.loginForm = this._formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  login(): void {
    let formValues = this.loginForm.value;

    let username = formValues.username;
    let password = formValues.password;

    this.loggedIn = this._authService.login(username, password);
    
    
    if (this.loggedIn) {
      this.user = this._authService.getUser();
      this._router.navigateByUrl('/journeys');
    } else {
      this.errorMessage = 'Invalid username or password, please try again';
    }
  }

  logout(): void {
    this._authService.logout();
    this.loggedIn = false;
    this.user = null;
    this._router.navigateByUrl('/');
  }
}
