import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChessBoardModule } from 'ngx-chess-board';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { IframepageComponent } from './iframepage/iframepage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    IframepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChessBoardModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
