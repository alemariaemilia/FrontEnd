import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from '../../service/skill.service';
import { Skill } from '../../model/skill';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
  }
}
