import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RollsComponent } from './rolls/rolls.component';
import { RollsService } from './rolls/rolls.service';

@NgModule({
  declarations: [
    AppComponent,
    RollsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RollsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
