import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { ErrorComponent } from './componentes/error/error.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { EditSkillComponent } from './componentes/hys/edit-skill.component';
import { HysComponent } from './componentes/hys/hys.component';
import { NewSkillComponent } from './componentes/hys/new-skill.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { EditproyectoComponent } from './componentes/proyecto/editproyecto.component';
import { NewproyectoComponent } from './componentes/proyecto/newproyecto.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    
    IndexComponent,

    NavBarComponent,

    LoginComponent,

    LogoAPComponent,

    BannerComponent,

    AcercaDeComponent,
    EditAcercaDeComponent,

    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,

    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,

    HysComponent,
    EditSkillComponent,
    NewSkillComponent,

    ProyectoComponent,
    NewproyectoComponent,
    EditproyectoComponent,

    FooterComponent,


    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
