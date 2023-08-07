import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private readonly emailKey = 'registeredEmail';

  constructor() { }
 private registeredEmail: string | null = null;

  setRegisteredEmail(email: string) {
    this.registeredEmail = email;
    localStorage.setItem(this.emailKey, email);
  }

  getRegisteredEmail(): string | null {
    return this.registeredEmail;
  }
}