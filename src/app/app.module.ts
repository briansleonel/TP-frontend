import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { LogsTraductorComponent } from './components/logs-traductor/logs-traductor.component';
import { AltaComponent } from './components/noticia/alta/alta.component';

//alife file
import {AlifeFileToBase64Module} from 'alife-file-to-base64';

//ng-tostr
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { SlideNoticiaComponent } from './components/noticia/slide-noticia/slide-noticia.component';
import { PasajeComponent } from './components/gestion-pasajes/pasaje/pasaje.component';
import { ShowPasaggesComponent } from './components/gestion-pasajes/show-pasagges/show-pasagges.component';
import { PasajeroComponent } from './components/gestion-pasajes/pasajero/pasajero.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'

import { ConfirmDialogComponent } from './components/utils/confirm-dialog/confirm-dialog.component';
import { ConfirmPassageDialogComponent } from './components/utils/confirm-passage-dialog/confirm-passage-dialog.component';
import { ConfirmPassengerDialogComponent } from './components/utils/confirm-passenger-dialog/confirm-passenger-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TraductorComponent,
    LogsTraductorComponent,
    AltaComponent,
    SlideNoticiaComponent,
    PasajeComponent,
    ShowPasaggesComponent,
    PasajeroComponent,
    ConfirmDialogComponent,
    ConfirmPassageDialogComponent,
    ConfirmPassengerDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AlifeFileToBase64Module,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut : 10000 , 
      positionClass : 'toast-top-right'
    }),
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
