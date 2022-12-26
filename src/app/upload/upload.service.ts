import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
   task : any;
   path: any;
   addedDocRef : any;

  snapshot: any;
  downloadURL: any;
  constructor(private http: HttpClient,private storage: AngularFireStorage,private firebase : AngularFirestore,private route : Router) { }

  uploadImage(image: File,id : string){
  this.path = 'images/'+id+'/'+image.name;
   const ref = this.storage.ref(this.path);
   this.task = this.storage.upload(this.path,image);
   this.task.then((snapshot:any) => {
    snapshot.ref.getDownloadURL().then((url:any) => {
      this.downloadURL = url;
      console.log(this.downloadURL);
    }).then(()=>{
      this.addedDocRef = this.firebase.collection('users').doc(id).collection('photos');
      this.addedDocRef.add({
        Date : new Date(),
        Name : image.name,
        downloadURL: this.downloadURL
      });
        this.route.navigate(['/gallery',id]);

    });
  });

 }
}
