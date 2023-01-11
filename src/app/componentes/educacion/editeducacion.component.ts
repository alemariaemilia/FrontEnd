import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';
import { Educacion } from '../../model/educacion';
import { EducacionService } from '../../service/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {

  educacion: Educacion = null;

  constructor(
    private educacionS: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al modificar educación");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacion.imgE = this.imageService.url
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate([''])
      }, err => {
        alert("Error al modificar");
        this.router.navigate
      }
    )
  }
  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "educacion_" + id;
    this.imageService.uploadImage($event, name)
  }
}
