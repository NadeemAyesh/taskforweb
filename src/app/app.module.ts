import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { PageTitleComponent } from './components/content/page-title/page-title.component';
import { FaqComponent } from './components/content/faq/faq.component';
import { FaqItemComponent } from './components/content/faq-item/faq-item.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageTitleComponent,
    FaqComponent,
    FaqItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
