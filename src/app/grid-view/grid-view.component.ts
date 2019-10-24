import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
// import { ScrollEvent } from 'ngx-scroll-event';
import { Router } from '@angular/router';


@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  photos: any[];
  searchQuery: String;
  focusedvalue: Boolean = false;
  constructor(private HttpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getPhotos();
  }
  getPhotos() {
    this.HttpService.getphotos().subscribe((res: any) => {
      console.log(res)
      this.photos = res;
    }, (err) => {
      console.log(err)
    })
  }
  searchPhotos(query) {
    this.HttpService.searchPhotos(query).subscribe((res: any) => {
      console.log(res)
      this.photos = res.results;
    }, (err) => {
      console.log(err)
    })
  }
  downloadImage(link) {
    window.open(link, '_blank');
  }
  goToUserProfile(username) {
    console.log(username)
    this.router.navigate([`profile/${username}`])
  }
  keyUp(e){
    if(e.keyCode == 13){
      this.searchPhotos(this.searchQuery);
    }
  }
}
