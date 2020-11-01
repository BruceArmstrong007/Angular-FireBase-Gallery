import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AngularFireModule} from '@angular/fire';

import {AuthService} from './auth/auth.service';
import {HomeService} from './home/home.service';
import { GalleryComponent } from './gallery/gallery.component';
import { UploadComponent } from './upload/upload.component';

var firebaseConfig = {
  apiKey: "AIzaSyBil_Drkin2_UGnPjLfYv0FZe-uqKlarw4",
  authDomain: "gallery-64c33.firebaseapp.com",
  databaseURL: "https://gallery-64c33.firebaseio.com",
  projectId: "gallery-64c33",
  storageBucket: "gallery-64c33.appspot.com",
  messagingSenderId: "719824887644",
  appId: "1:719824887644:web:c012decb11062e8923ab99",
  measurementId: "G-Y0X88CRVY7"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    GalleryComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
