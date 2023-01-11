import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {

  proyecto: Proyecto = null;

  constructor(
    private proyectoS: ProyectoService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyecto.imgP = this.imageService.url
    this.proyectoS.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }
  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imageService.uploadImage($event, name)
  }
}