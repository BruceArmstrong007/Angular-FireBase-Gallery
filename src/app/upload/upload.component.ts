import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { ActivatedRoute } from '@angular/router';
import { UploadService } from './upload.service';
class ImageSnippet {

  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
   id: string;

  selectedFile: ImageSnippet;
  constructor(private firebase : AngularFirestore,private route : ActivatedRoute,private upload : UploadService) { }

   ngOnInit(): void {
     this.id = this.route.snapshot.paramMap.get('id');

  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      this.upload.uploadImage(this.selectedFile.file,this.id);
    });
    reader.readAsDataURL(file);
  }
}
