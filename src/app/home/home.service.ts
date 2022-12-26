import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public firebaseAuth : AngularFireAuth) { }
  logout(){
   return this.firebaseAuth.signOut();
  }

}
