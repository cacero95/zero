import { Injectable } from '@angular/core';
import { Upload_content } from '../models/usuario';
import * as firebase from 'firebase';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ColectionsService {

  constructor(private toast:ToastController) { }

  upload_content(content:Upload_content){
    let current_user = firebase.auth().currentUser;
    console.log(current_user);
    firebase.firestore().collection("publicaciones").add({
      description: content.description,
      created: firebase.firestore.FieldValue.serverTimestamp(),// entraga la hora en el server de firebase
      owner: current_user.uid,
      owner_name: current_user.displayName
    }).then((doc)=>{
      console.log(doc)
    })
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
}
