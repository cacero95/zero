import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AlertController, ToastController } from '@ionic/angular';
import { Usuario } from '../models/usuario';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';
@Injectable({
  providedIn: 'root'
})
export class DbaService {

  user:firebase.User;
  constructor(private alert:AlertController,
    private toast:ToastController,
    private camera:Camera) { }


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
        this.user = us.user;
        this.user.updateProfile({
          displayName:usuario.name,
          photoURL:""
        }).then(()=>{
          this.showAlert(`Welcome ${this.user.displayName}`,'success');
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
  add_toStorage() {
    let options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 512,
      targetWidth: 512,
      allowEdit: true,
    }
    this.camera.getPicture(options).then((base64Image)=>{
      console.log(base64Image);
      this.showAlert(base64Image,"success");
    }).catch((err)=>{
      this.showAlert(err.message,"danger");
    })
  }
}
