import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AlertController, ToastController } from '@ionic/angular';
import { Usuario, Upload_content } from '../models/usuario';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbaService {

  user:firebase.User;
  constructor(private alert:AlertController,
    private toast:ToastController,
    private camera:Camera,
    private firedba:AngularFireDatabase) { }


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

  get_music(){
    return this.firedba.list('music').snapshotChanges()
    .pipe(map(values=>{
      return values.map((element)=>{
        return element.payload.val();
      })
    }))
  }
  get_images(){
    return this.firedba.list('imagenes').snapshotChanges()
    .pipe(map(values=>{
      return values.map((element)=>{
        return element.payload.val();
      })
    }))
  }


  upload_content(files):Promise<any>{
    let urls = [];
    let firestorage = firebase.storage().ref();
    let fire_task:firebase.storage.UploadTask;
    return new Promise((resolve, reject)=>{
      let count = 1;
      for(let file of files){
        let dba_name = new Date().valueOf().toString();
        let file_name = file.name;
        fire_task = firestorage.child(`/music/${file_name}`)
        .put(file);
        fire_task.on(firebase.storage.TaskEvent.STATE_CHANGED,
          (status)=>{
          },
          (err)=>{
            this.showAlert(':( Lo sentimos',"danger");
          },
          async ()=>{
            await firestorage.child(`/music/${file_name}`).getDownloadURL()
            .then(async(url)=>{
              
              let object = new Object();
              object["name"] = file_name;
              object["url"] = url
              urls.push(object);
              await this.firedba.object(`music/${dba_name}${count}`).update(object).then(()=>{
                count++;
                this.showAlert(`${file_name} arriba!`, 'success');
              }).catch(()=>{
                this.showAlert(`${file_name} down!`, "danger");
              })
            })
          })
      }
    })
  }

  add_imageToStorage(contenido:Upload_content):Promise<any> {
    return new Promise((resolve,reject)=>{
      let ref = firebase.storage().ref();
          let uploadTask:firebase.storage.UploadTask = ref.child(`imagenes/${contenido.name}`)
          .putString(contenido.url, 'base64',{contentType: 'image/jpeg'});
          console.log(uploadTask);
          uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            ()=>{
              console.log('subiendo');
            },
            (err)=>{
              console.log(err);
              this.showAlert(`${err.message}`,'danger');
              reject(false);
            },()=>{
              ref.child(`imagenes/${contenido.name}`).getDownloadURL().then((url)=>{
                let picture = new Object();
                picture = {
                  name:contenido.name,
                  description:contenido.description,
                  url
                }
                this.firedba.object(`imagenes/${contenido.name}`).update(picture).then(()=>{
                  this.showAlert(`up!`, 'success');
                  resolve(true);
                }).catch(()=>{
                  this.showAlert(`down!`, 'danger');
                  reject(false);
                })
              })
            })  
    })
  }
}
