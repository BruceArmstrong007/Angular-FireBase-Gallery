import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Router,ActivatedRoute } from '@angular/router';
import { GalleryService } from './gallery.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  id : string;
  Date : Date;
  Name : string;
  downloadURL: string;
  documentPhotos;
  constructor(private firebase : AngularFirestore,private router : Router,private route : ActivatedRoute,private gallery : GalleryService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.firebase.collection('users').doc(this.id).collection('photos').get().subscribe(res =>{
      this.documentPhotos = res.docs;
      });
  }

  deleteData(imgId:string){
    this.firebase.collection('users').doc(this.id).collection('photos').doc(imgId).delete().then(res => {
      window.location.reload();
    });
  }

}
