import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RollsComponent } from './rolls/rolls.component';
import { RollsService } from './rolls/rolls.service';

@NgModule({
  declarations: [
    AppComponent,
    RollsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RollsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
