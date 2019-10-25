import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  photos: any = [];
  searchQuery: String;
  focusedvalue: Boolean = false;
  eventValue: Boolean = true;
  loader: Boolean = true;
  pageNumber: any;
  allPageNumber: any;
  constructor(private HttpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getPhotos(1);
    this.pageNumber = 1;
    this.allPageNumber = 1;
  }
  getPhotos(page) {
    this.loader = true;
    this.HttpService.getphotos(page).subscribe((res: any) => {
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
      this.loader = false;
    })
  }
  searchPhotos(query, page) {
    this.loader = true;
    this.HttpService.searchPhotos(query, page).subscribe((res: any) => {
      let itemsProcessed = 0;
      if (res.results.length == 0) {
        this.loader = false;
      } else {
        res.results.forEach(element => {
          this.photos.push(element)
          itemsProcessed++
          if (itemsProcessed === res.results.length) {
            this.eventValue = true;
            this.loader = false;
          }
        })
      }
    }, (err) => {
      this.loader = false;
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
  keyUp(e) {
    if (e.keyCode == 13) {
      this.photos = [];
      this.searchPhotos(this.searchQuery, 1);
    }
  }
  handleScroll(e) {
    if (e.isReachingBottom) {
      if (this.eventValue && this.searchQuery) {
        this.eventValue = false;
        this.scrollPagination()
      } else if (this.eventValue && !this.searchQuery) {
        this.eventValue = false;
        this.allScrollPagination()
      }
    }
    // if (e.isReachingTop) {
    //   // console.log(`the user is reaching the bottom`);
    // }
    // if (e.isWindowEvent) {
    //   // console.log(`This event is fired on Window not on an element.`);
    // }
  }
  allScrollPagination() {
    this.allPageNumber = this.allPageNumber + 1;
    this.getPhotos(this.allPageNumber)
  }
  scrollPagination() {
    this.pageNumber = this.pageNumber + 1;
    this.searchPhotos(this.searchQuery, this.pageNumber)
  }
}
