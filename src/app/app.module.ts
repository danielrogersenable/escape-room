import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './areas/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Puzzle1Component } from './areas/puzzle1/puzzle1.component';
import { Puzzle2Component } from './areas/puzzle2/puzzle2.component';
import { Puzzle3Component } from './areas/puzzle3/puzzle3.component';
import { CompleteComponent } from './areas/complete/complete.component';
import { AnswerComponent } from './shared/answer/answer.component';
import { ContentsComponent } from './areas/contents/contents.component';
import { TileComponent } from './shared/tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    Puzzle1Component,
    Puzzle2Component,
    Puzzle3Component,
    CompleteComponent,
    AnswerComponent,
    ContentsComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
