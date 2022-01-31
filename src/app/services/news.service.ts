import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
   
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  constructor(private httpClient: HttpClient) { }
   
  getUrl(sources = 'techcrunch') {
    return `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=096872ae3a4049d8ae150f85b68af13b`;
  }
  getNews(){
    return this.httpClient.get<{articles: Array<any>}>(this.getUrl());
  }

}