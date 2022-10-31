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
import { MenuComponent } from './areas/menu/menu.component';
import { IntroComponent } from './areas/intro/intro.component';
import { Puzzle4Component } from './areas/puzzle4/puzzle4.component';
import { Puzzle5Component } from './areas/puzzle5/puzzle5.component';
import { Puzzle6Component } from './areas/puzzle6/puzzle6.component';
import { Puzzle7Component } from './areas/puzzle7/puzzle7.component';
import { Puzzle8Component } from './areas/puzzle8/puzzle8.component';
import { Puzzle9Component } from './areas/puzzle9/puzzle9.component';
import { Puzzle10Component } from './areas/puzzle10/puzzle10.component';
import { Puzzle11Component } from './areas/puzzle11/puzzle11.component';
import { Puzzle12Component } from './areas/puzzle12/puzzle12.component';
import { Puzzle13Component } from './areas/puzzle13/puzzle13.component';
import { Puzzle14Component } from './areas/puzzle14/puzzle14.component';

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
    TileComponent,
    MenuComponent,
    IntroComponent,
    Puzzle4Component,
    Puzzle5Component,
    Puzzle6Component,
    Puzzle7Component,
    Puzzle8Component,
    Puzzle9Component,
    Puzzle10Component,
    Puzzle11Component,
    Puzzle12Component,
    Puzzle13Component,
    Puzzle14Component
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
