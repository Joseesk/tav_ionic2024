import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ApiServiceService } from '../api/api-service.service';
import { usuario } from '../models/usuario'
@Component({
  selector: 'app-docente-pagina',
  templateUrl: './docente-pagina.page.html',
  styleUrls: ['./docente-pagina.page.scss'],
})
export class DocentePaginaPage implements OnInit {
  private data:any[] = [];
  nav =''











  constructor(private router: Router, private activeroute: ActivatedRoute, private apiService: ApiServiceService) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.nav = this.router.getCurrentNavigation()?.extras.state?.['name'];
        console.log(this.nav)
      }
    });
  }

  ngOnInit() {
    this.apiService.obtenerCursosPorProfesor().subscribe((data::any =>{

    }))
  }
}
