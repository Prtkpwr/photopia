import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  username:any;
  photos:any;
  constructor(private HttpService:HttpService,private route: ActivatedRoute, private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    console.log(this.username)
    this.userPhotos()
    this.userProfile()

  }
  userPhotos(){
    this.HttpService.userPhotos(this.username).subscribe((res)=>{
      console.log(res)
      this.photos = res;
    },(err)=>{

    })
  }
  userProfile(){
    this.HttpService.userProfile(this.username).subscribe((res)=>{
      console.log(res)
    },(err)=>{

    })
  }
  downloadImage(link){
    window.open(link,'_blank');
  }

}
