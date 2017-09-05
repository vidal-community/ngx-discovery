import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiscoveryModule } from './modules/discovery/discovery.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DiscoveryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
