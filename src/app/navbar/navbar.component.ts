import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarBrandTitle: string = 'FoodieJourney';
  loggedIn: boolean = false;
  user: any;

  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    if (!this.user) {
      this.createLoginForm();
    }
  }

  ngOnInit() {
  }

  createLoginForm(): void {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}
