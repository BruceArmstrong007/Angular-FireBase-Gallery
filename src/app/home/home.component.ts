import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id : any;
  constructor(public homeService :HomeService,private router : Router,private route : ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  logout(){
   this.homeService.logout().then(res =>{
    localStorage.removeItem('user');
    this.router.navigate(['/']);
   });
  }

}
