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


  login(usuario:Usuario):Promise<any>{
    return new Promise((resolve,reject)=>{
      firebase.auth().signInWithEmailAndPassword(usuario.email,usuario.password)
      .then((usuario:any)=>{
        console.log(usuario);
        let us:firebase.User = usuario.user;
        this.showAlert(`Welcome ${us.displayName}`,"success");
        resolve(true);     
      }).catch(err=>{
        this.showAlert(err.message,"danger");
        reject(false);
      })
    })
  }
  signIn(usuario:Usuario):Promise<any>{
    return new Promise((resolve,reject)=>{
      firebase.auth().createUserWithEmailAndPassword(usuario.email,usuario.password)
      .then((us)=>{
        let user:firebase.User = us.user;
        user.updateProfile({
          displayName:usuario.name,
          photoURL:""
        }).then(()=>{
          this.showAlert(`Welcome ${user.displayName}`,'success');
          resolve(true);
        })
      }).catch(err=>{
        this.showAlert(`:( ${err.message}`,'danger');
        reject(false);
      })
    })
  }
  async showAlert(header, color){
    let toast = await this.toast.create({
      header,
      duration:3000,
      color
    });
    toast.present();
  }
}
