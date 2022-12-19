import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { ErrorComponent } from './componentes/error/error.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditSkillComponent } from './componentes/hys/edit-skill.component';
import { NewSkillComponent } from './componentes/hys/new-skill.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditproyectoComponent } from './componentes/proyecto/editproyecto.component';
import { NewproyectoComponent } from './componentes/proyecto/newproyecto.component';

const routes: Routes = [
{ path: '', component: IndexComponent,},
{ path: 'login', component: LoginComponent },
{ path: 'editacercade/:id', component: EditAcercaDeComponent},
{ path: 'nuevaexp', component: NewExperienciaComponent },
{ path: 'editexp/:id', component: EditExperienciaComponent},
{ path: 'nuevaedu', component: NeweducacionComponent},
{ path: 'editedu/:id', component: EditeducacionComponent},
{ path: 'newskill', component: NewSkillComponent},
{ path: 'editskill/:id', component: EditSkillComponent},
{ path: 'newproyecto', component: NewproyectoComponent},
{ path: 'editproyecto/:id', component: EditproyectoComponent},
{ path: '**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
