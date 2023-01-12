import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToggleModule } from '@example-libraries/toggle';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, ToggleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
