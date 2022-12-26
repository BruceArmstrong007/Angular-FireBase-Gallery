import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false
  constructor(public firebaseAuth : AngularFireAuth) { }

async signin(email : string,password : string){
  return await this.firebaseAuth.signInWithEmailAndPassword(email,password);
}

async signup(email : string,password : string){
  return await this.firebaseAuth.createUserWithEmailAndPassword(email,password);
}


}
