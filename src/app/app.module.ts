import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AppService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
