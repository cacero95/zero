import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { SigninComponent } from '../components/signin/signin.component';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DbaService } from '../services/dba.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {} as Usuario;
  pictures = [
    'assets/img/last_of_us.png',
    'assets/img/kobe.png',
    'assets/img/controller.png'
  ]
  constructor(private dba:DbaService,
    private router:Router,
    private modal:ModalController,
    private auth:AngularFireAuth) { }

  ngOnInit() {
    this.auth.authState.subscribe((usuario)=>{
      if(usuario.email){
        this.router.navigate(['menu/home']);
      }
    })
  }
  entrar() {
    this.dba.login(this.user).then((respuesta)=>{
      if (respuesta == true){
        this.navegar('menu/home');
      }
    })
  }
  navegar(url){
    this.router.navigate([`/${url}`]);
  }
  async registrar(){
    let modal = await this.modal.create({
      component:SigninComponent
    });
    modal.present();
    await modal.onDidDismiss().then((outcome:any)=>{
      if (outcome.respuesta){
        this.router.navigate(['home']);
      }
    })
  }
}
