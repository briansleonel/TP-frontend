import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindPasajeroComponent } from './components/gestion-pasajes/find-pasajero/find-pasajero.component';
import { PasajeComponent } from './components/gestion-pasajes/pasaje/pasaje.component';
import { PasajeroComponent } from './components/gestion-pasajes/pasajero/pasajero.component';
import { ShowPasaggesComponent } from './components/gestion-pasajes/show-pasagges/show-pasagges.component';
import { HomeComponent } from './components/home/home.component';
import { LogsTraductorComponent } from './components/logs-traductor/logs-traductor.component';
import { AltaComponent } from './components/noticia/alta/alta.component';
import { ShowNoticiasComponent } from './components/noticia/show-noticias/show-noticias.component';
import { SlideNoticiaComponent } from './components/noticia/slide-noticia/slide-noticia.component';
import { TraductorComponent } from './components/traductor/traductor.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'traductor', component : TraductorComponent},
  {path: 'logs', component: LogsTraductorComponent},
  {path: 'add-noticia', component: AltaComponent},
  {path: 'noticias', component: SlideNoticiaComponent},
  {path: 'show-passages', component: ShowPasaggesComponent},
  {path: 'passage', component: PasajeComponent},
  {path: 'passenger', component: PasajeroComponent},
  {path: 'passage/:id', component: PasajeComponent},
  {path: 'find-passenger', component: FindPasajeroComponent},
  {path: 'show-noticias', component: ShowNoticiasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
