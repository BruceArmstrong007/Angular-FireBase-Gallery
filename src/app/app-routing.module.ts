import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {UploadComponent} from './upload/upload.component';
import {GalleryComponent} from './gallery/gallery.component';
const routes: Routes = [
  {
    path:'',
    component:AuthComponent
  },
  {
    path:'upload/:id',
    component:UploadComponent
  },
  {
    path:'gallery/:id',
    component:GalleryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
