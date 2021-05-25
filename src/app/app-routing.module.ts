import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasajeComponent } from './components/gestion-pasajes/pasaje/pasaje.component';
import { ShowPasaggesComponent } from './components/gestion-pasajes/show-pasagges/show-pasagges.component';
import { HomeComponent } from './components/home/home.component';
import { LogsTraductorComponent } from './components/logs-traductor/logs-traductor.component';
import { AltaComponent } from './components/noticia/alta/alta.component';
import { SlideNoticiaComponent } from './components/noticia/slide-noticia/slide-noticia.component';
import { TraductorComponent } from './components/traductor/traductor.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'traductor', component : TraductorComponent},
  {path: 'logs', component: LogsTraductorComponent},
  {path: 'add-noticia', component: AltaComponent},
  {path: 'noticias', component: SlideNoticiaComponent},
  {path: 'show-passages', component: ShowPasaggesComponent},
  {path: 'passage', component: PasajeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
