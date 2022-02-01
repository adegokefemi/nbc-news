import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './layouts/content/content.component';
import { PlaceholderComponent } from './layouts/placeholder/placeholder.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { SlideComponent } from './components/slide/slide.component';
import { CardComponent } from './components/card/card.component';
import { EditorComponent } from './layouts/editor/editor.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    PlaceholderComponent,
    HeadlineComponent,
    SlideComponent,
    CardComponent,
    EditorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
