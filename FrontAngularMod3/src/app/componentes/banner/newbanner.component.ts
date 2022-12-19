import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';

@Component({
  selector: 'app-newbanner',
  templateUrl: './newbanner.component.html',
  styleUrls: ['./newbanner.component.css']
})
export class NewbannerComponent implements OnInit {
  tituloB: string;
  imgB: string;

  constructor(private bannerS: BannerService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const Banner = new banner(this.tituloB, this.imgB,);
    this.bannerS.save(Banner).subscribe(
      data => {
        alert("Banner añadido correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}