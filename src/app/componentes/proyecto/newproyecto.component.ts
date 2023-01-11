import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../../model/proyecto';
import { ProyectoService } from '../../service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  tituloP: string = '';
  descripcionP: string = '';
  imgP: string = '';
  urlP: string = '';



  constructor(private proyectoS: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.tituloP, this.descripcionP, this.imgP, this.urlP,);
    this.proyectoS.save(proyecto).subscribe(
      data => {
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
