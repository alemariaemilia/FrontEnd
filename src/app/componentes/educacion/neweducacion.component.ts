import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from '../../model/educacion';
import { EducacionService } from '../../service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})

export class NeweducacionComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  imgE: string = '';
  inicioE: string = '';
  finalE: string = '';

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, 
      this.descripcionE, this.imgE, this.inicioE,  this.finalE);
    this.educacionS.save(educacion).subscribe(
      data => {
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}