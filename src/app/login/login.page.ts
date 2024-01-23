import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ApiServiceService } from '../api/api-service.service';
import { usuario } from '../models/usuario';
import { perfil } from '../models/perfil';
import { curso } from '../models/curso';
import { AuthGuard } from '../guard/auth.guard'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController, private consumoapi: ApiServiceService, private auth: AuthGuard ) {}

  private typeuser!: usuario;
  private typePerfil!: perfil;
  private curso!:curso;


  usuario = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20),  Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
  })





  login() {
    this.consumoapi.login(this.usuario.value.email!, this.usuario.value.password!).subscribe(
      (response) => {
        this.typeuser = response.body as unknown as usuario;
        console.log("bbb" + response.status);
        if (response.status == 200) {
          let setData: NavigationExtras = {
            state: {
              id: this.typeuser.id,
              user: this.typeuser.user,
              email: this.typeuser.correo,
              nombre: this.typeuser.nombre,
              tipoPerfil: this.typeuser.tipoPerfil
            }
          };

          console.log("aaas"+this.typeuser.tipoPerfil);

          if (this.typeuser.tipoPerfil === 1) {
            this.auth.setAuthenticationStatus(true);
            this.router.navigate(['/docente-pagina'], setData);
          }

          if (this.typeuser.tipoPerfil === 2) {
            this.auth.setAuthenticationStatus(true);
            this.router.navigate(['/alumno-pagina'], setData);
          }
        }

        if (response.status === 401) {
          this.presentAlert();

        }
      },
      (error) => {
        console.error('Error en inicio de sesión:', error);
      });
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Error Login',
      subHeader: 'Infomación : ',
      message: 'Usuario o contraseña son incorrecto',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  ngOnInit() {}

}
