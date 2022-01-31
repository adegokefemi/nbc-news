import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  news: any[] = [];

  viewMore: boolean = false;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe(response => {
        this.news = response.articles;
      });
  }

  toggleViewMore() {
    this.viewMore = !this.viewMore;
  }
}
