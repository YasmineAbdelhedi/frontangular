import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddblocComponent } from './bloc/addbloc/addbloc.component';
import { UpdateblocComponent } from './bloc/updatebloc/updatebloc.component';import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BlocService} from "./services/bloc.service";
import {FormsModule} from "@angular/forms";
import { DeleteblocComponent } from './bloc/deletebloc/deletebloc.component';
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import { ListblocsComponent } from './bloc/listblocs/listblocs.component';

@NgModule({
  declarations: [
    AppComponent,
    AddblocComponent,
    UpdateblocComponent,
    DeleteblocComponent,
    NavbarComponent,
    ListblocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [BlocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
