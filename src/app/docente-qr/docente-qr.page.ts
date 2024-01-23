import { Component, OnInit } from '@angular/core';
import { curso } from '../models/curso';
import { alumnos } from '../models/alumnos';
import { ApiServiceService } from '../api/api-service.service';
import { ActivatedRoute, Router, Route } from '@angular/router';
import * as qrcode from 'qrcode-generator';


@Component({
  selector: 'app-docente-qr',
  templateUrl: './docente-qr.page.html',
  styleUrls: ['./docente-qr.page.scss'],
})

export class DocenteQrPage implements OnInit {

  cursol: curso | undefined;
  alumnosl: alumnos[] | undefined = [];
  profesorId: number = 1;
  cursoId:any;

  qrDataURL: string = '';

  constructor(private apiService: ApiServiceService, private router: Router, private activeroute : ActivatedRoute) {

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.profesorId = this.router.getCurrentNavigation()?.extras.state?.['idProfesor'];
        this.cursoId = this.router.getCurrentNavigation()?.extras.state?.['idCurso'];
      }
    });

  }

  generateQRCode() {
    if (this.cursol) {
        const fechaActual = new Date().toISOString().split('T')[0];
        const data = `${this.cursol.codigo}-${this.cursol.seccion}-${fechaActual}`;

        let qr = qrcode(4, 'L');
        qr.addData(data);
        qr.make();
        this.qrDataURL = qr.createDataURL(4);
    }
  }


  ngOnInit() {
    this.apiService.obtenerCursosPorProfesor(this.profesorId).subscribe(
        data => {
          this.cursol = data.find((curso: curso) => curso.id === this.cursoId);
            this.alumnosl = this.cursol ? this.cursol.alumnos : [];
            this.generateQRCode();
        },
        error => {
            console.error("Error obteniendo cursos:", error);
        }
    );
}

}



















