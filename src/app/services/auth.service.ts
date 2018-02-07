import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import * as CryptoJS from 'crypto-js';
import { IUser } from '../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export const TOKEN_NAME: string = 'jwt_user';

@Injectable()
export class AuthService {

  secret: string = 'secret';

  testUser: IUser = {
    username: 'johndoe',
    password: 'password',
    firstName: 'John',
    lastName: 'Doe'
  }

  constructor() {}

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  isLoggedIn(): boolean {
    if (this.getToken()) {
      return true
    }

    return false;
  }

  getUser(): IUser {
    let token = localStorage.getItem(TOKEN_NAME);
    let bytes = CryptoJS.AES.decrypt(token, this.secret);
    let plainText = bytes.toString(CryptoJS.enc.Utf8);

    return JSON.parse(plainText);
  }

  logout(): boolean {
    localStorage.removeItem(TOKEN_NAME);
    return false;
  }

  login(username: string, password: string): boolean {
    if (username === this.testUser.username && password === this.testUser.password) {
      let token = CryptoJS.AES.encrypt(JSON.stringify(this.testUser), this.secret).toString()
      this.setToken(token);
      return true;
    } else {
      return false;
    }
  }
}
