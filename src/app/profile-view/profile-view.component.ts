import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  username: any;
  photos: any = [];
  profile: any;
  eventValue: Boolean = true;
  loader: Boolean = false;
  pageNumber: any;
  constructor(private HttpService: HttpService, private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.pageNumber = 1;
    this.username = this.route.snapshot.paramMap.get('username');
    console.log(this.username)
    this.userPhotos(1)
    this.userProfile()

  }
  userPhotos(page) {
    this.loader = true;
    this.HttpService.userPhotos(this.username, page).subscribe((res: any) => {
      if (res.length == 0) {
        this.loader = false;
      } else {
        let itemsProcessed = 0;
        res.forEach(element => {
          this.photos.push(element)
          itemsProcessed++
          if (itemsProcessed === res.length) {
            this.eventValue = true;
            this.loader = false;
          }
        })
      }
    }, (err) => {
      console.log(err)
    })
  }
  userProfile() {
    this.HttpService.userProfile(this.username).subscribe((res) => {
      console.log(res)
      this.profile = res;
    }, (err) => {

    })
  }
  downloadImage(link) {
    window.open(link, '_blank');
  }
  handleScroll(e) {
    if (e.isReachingBottom) {
      if (this.eventValue) {
        this.eventValue = false;
        this.scrollPagination()
      }
    }

    // if (e.isReachingTop) {
    //   // console.log(`the user is reaching the bottom`);
    // }
    // if (e.isWindowEvent) {
    //   // console.log(`This event is fired on Window not on an element.`);
    // }
  }
  scrollPagination() {
    this.pageNumber = this.pageNumber + 1;
    this.userPhotos(this.pageNumber)
  }

}
