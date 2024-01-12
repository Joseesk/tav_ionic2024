import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) {}

  usuario = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20),  Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
    //name: new FormControl('', [Validators.required, Validators.minLength(4),Validators.maxLength(50)])
  })
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Error al ingresar sus credenciales por favor corregir.',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
  email = "aaaa@aaaa.cl"
  password = "aaaa"
  nombre = "Juan Mat"

  validate = false
  login(){
    //Objeto naviation extra
    let nav: NavigationExtras = {
      state:{
        name: this.nombre,
      }
    }

    if(this.usuario.value.email == this.email && this.usuario.value.password == this.password){
      this.validate = true
      this.router.navigate(['/docente-pagina'], nav);
    }
    if(this.validate == false){
      //Alerta
      this.presentAlert()
    }
  }
  ngOnInit() {}

}
