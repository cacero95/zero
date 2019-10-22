import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AlertController, ToastController } from '@ionic/angular';
import { Usuario } from '../models/usuario';
@Injectable({
  providedIn: 'root'
})
export class DbaService {

  constructor(private alert:AlertController,
    private toast:ToastController) { }


  login(usuario:Usuario){
    firebase.auth().signInWithEmailAndPassword(usuario.mail,usuario.password)
    .then((usuario)=>{

    }).catch(err=>{

    })
  }
  signIn(){

  }
  showAlert(header, subheader){
    
  }
}
