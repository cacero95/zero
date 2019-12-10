import { Injectable } from '@angular/core';
import { Upload_content } from '../models/usuario';
import * as firebase from 'firebase';
import { ToastController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class ColectionsService {

  constructor(private toast:ToastController,
    private camera:Camera,
    private loading:LoadingController) { }

  upload_content(content:Upload_content){
    let current_user = firebase.auth().currentUser;
    console.log(current_user);
    console.log(content);
    if (content.url.length > 0){
      firebase.firestore().collection("publicaciones").add({
        description: content.description,
        created: firebase.firestore.FieldValue.serverTimestamp(),// entraga la hora en el server de firebase
        owner: current_user.uid,
        owner_name: current_user.displayName,
        email: current_user.email,
        url:content.url  
      })  
    }
    else {

      firebase.firestore().collection("publicaciones").add({
        description: content.description,
        created: firebase.firestore.FieldValue.serverTimestamp(),// entraga la hora en el server de firebase
        owner: current_user.uid,
        owner_name: current_user.displayName,
        email: current_user.email,
      }).then((doc)=>{
        console.log(doc)
      })
    }
  }
  async show_message(header, color){
    let toast = await this.toast.create({
      header,
      mode:'ios',
      color,
      animated:true,
      duration:3000
    });
    toast.present();
  }
  getCollection(){
    return new Promise((resolve,reject)=>{
      let docs = [];
      firebase.firestore().collection("publicaciones").get()
      .then((data)=>{
        console.log(data);
        data.forEach((doc)=>{
          docs.push(doc);
        })
        resolve(docs);
      }).catch((err)=>{
        console.log(err);
        reject(false);
      })

    })
  }
  add_imageToStorage(contenido:Upload_content):Promise<any> {
    
    return new Promise((resolve,reject)=>{
      
      let ref = firebase.storage().ref();
          let uploadTask:firebase.storage.UploadTask = ref.child(`imagenes/${contenido.name}`)
          .putString(contenido.url, 'base64',{contentType: 'image/jpeg'});
          console.log(uploadTask);
          uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            async(percentaje)=>{

              let porcentaje = (percentaje.totalBytes / percentaje.bytesTransferred) * 100;
              let load = await this.loading.create({
                message:`Completado ${porcentaje}`,
                animated:true,
                mode:'ios',
                duration:3000
              });
              load.present();    
                            
            },
            (err)=>{
              console.log(err);
              this.show_message(`${err.message}`,'danger');
              reject(false);
            },()=>{
              ref.child(`imagenes/${contenido.name}`).getDownloadURL().then((url)=>{
                contenido.url = url;
                
                this.upload_content(contenido);
              })
            })  
    })
  }
}
