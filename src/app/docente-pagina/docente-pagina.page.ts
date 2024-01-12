import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-docente-pagina',
  templateUrl: './docente-pagina.page.html',
  styleUrls: ['./docente-pagina.page.scss'],
})
export class DocentePaginaPage implements OnInit {
  nav =''
  date: Date = new Date();
  day: number = this.date.getDate();
  month: number = this.date.getMonth() + 1;
  year: number = this.date.getFullYear();
  fechaFormateada:  String = `${this.day}/${this.month}/${this.year}`;
  class = {
    name: "Programación de aplicaciones moviles",
    code: "P001",
    seccion: "002_v"
  }

  class2 = {
    name: "Ingenieria de software",
    code: "ING005",
    seccion: "005_v"
  }

  class3 = {
    name: "Programación web",
    code: "PW002",
    seccion: "004_v"
  }
  constructor(private router: Router, private activeroute: ActivatedRoute) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.nav = this.router.getCurrentNavigation()?.extras.state?.['name'];
        console.log(this.nav)
      }
    });
  }

  ngOnInit() {}
}
