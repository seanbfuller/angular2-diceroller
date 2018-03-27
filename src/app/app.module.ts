import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RollsComponent } from './rolls/rolls.component';
import { RollsService } from './rolls/rolls.service';
import { NotFoundComponent } from './not-found.component';
import { RollsSkillComponent } from './rolls-skill/rolls-skill.component';

/**
 * Define Routes
 */
const appRoutes: Routes = [
  // hit rolls
  { path: 'hit-rolls', component: RollsComponent },
  // skill rolls
  { path: 'rolls-skill', component: RollsSkillComponent },
  // default
  { path: '',
    redirectTo: '/hit-rolls',
    pathMatch: 'full'
  },
  // 404
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RollsComponent,
    NotFoundComponent,
    RollsSkillComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // for debugging purposes only
        enableTracing: true 
      }
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [RollsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
