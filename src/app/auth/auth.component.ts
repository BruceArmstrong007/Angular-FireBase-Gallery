import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/compat/firestore";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  hide = true;
  constructor(public authService: AuthService,private route : Router,private firebase : AngularFirestore) { }

  ngOnInit(): void {

  }

 async postData(form : NgForm,opt: string){
    if(opt == 'register'){
      await this.authService.signup(form.value.email,form.value.password).then(res=>{
        if(res?.additionalUserInfo?.isNewUser == true){
          localStorage.setItem('user',JSON.stringify(res.user));
            this.firebase.collection("users").doc(res?.user?.uid).collection("photos").doc(res?.user?.uid).set({
            });
          window.alert("Successfully registered!");
        }
        else{
          window.alert("Already registered!");
        }
      });
    }
    if(opt == 'login'){
      await this.authService.signin(form.value.email,form.value.password).then(res=>{
        console.log(res?.user?.uid);
        if(res?.additionalUserInfo?.isNewUser == false){
          localStorage.setItem('user',JSON.stringify(res.user));
          this.firebase.collection('users').doc(res?.user?.uid).collection('photos').doc(res?.user?.uid).delete();

          this.route.navigate(['/gallery',res?.user?.uid]);
        }else{
          window.alert("Failed to Log In!");
        }
      });

    }
  }

}
