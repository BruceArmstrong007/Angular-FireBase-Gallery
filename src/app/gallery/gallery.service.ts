import { Injectable } from '@angular/core';

import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private firebase : AngularFirestore) { }

  getData(id: string){
   return 1;
  }
}
