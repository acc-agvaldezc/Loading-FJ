import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown';
import { IUser } from '../../interfaces/user';
import { AuthService, TOKEN_NAME } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarBrandTitle: string = 'FoodieJourney';
  loggedIn: boolean = false;
  user: IUser;

  loginForm: FormGroup;
  
  constructor(private _formBuilder: FormBuilder, private _authService: AuthService) {
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
    this.user = this._authService.getUser();
  }

  logout(): void {
    this._authService.logout();
    this.loggedIn = false;
    this.user = null;
  }
}
