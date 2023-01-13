import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageexpeService } from 'src/app/service/imageexpe.service';
import { Experiencia } from '../../model/experiencia';
import { SExperienciaService } from '../../service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css'],
})
export class EditExperienciaComponent implements OnInit {
[x: string]: any;

  explab: Experiencia = null;

  constructor(
    private sExperiencia: SExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageexpeService: ImageexpeService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data => {
        this.explab = data;
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.explab.imgE = this.imageexpeService.url
    this.sExperiencia.update(id, this.explab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }
  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "experiencia_" + id;
    this.imageexpeService.uploadImage($event, name)
  }
}
