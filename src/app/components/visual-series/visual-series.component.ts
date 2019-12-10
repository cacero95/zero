import { Platform, AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ColectionsService } from '../../services/colections.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Upload_content } from '../../models/usuario';
@Component({
  selector: 'app-visual-series',
  templateUrl: './visual-series.component.html',
  styleUrls: ['./visual-series.component.scss'],
})
export class VisualSeriesComponent implements OnInit {
  imagen:string;
  upload = {} as Upload_content;
  constructor(private collection:ColectionsService,
    private camera:Camera,
    private alert:AlertController,
    private platform:Platform,
    private modal:ModalController) { }

  ngOnInit() {
    
  }
  
  close() {
    this.modal.dismiss();
  }
  show_camera(){
    if (this.platform.is('cordova')){
      this.upload.name = new Date().valueOf().toString(); 
      let options: CameraOptions = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.PNG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        targetHeight: 600,
        targetWidth: 600,
        allowEdit: true,
      }
      this.camera.getPicture(options).then(base64Image=>{
        this.imagen = `data:image/jpeg;base64,${base64Image}`
        this.upload.url = base64Image;
      })
    }
    else {
      this.show_message('Función disponible en','Mobile');
    }
  }
  async show_message(header,subHeader){
    let alert = await this.alert.create({
      header,
      subHeader,
      mode:'ios',
      animated:true,
      buttons:['Confirmar']
    });
    alert.present();
  }
  comentar(description:string){
    this.upload.description = description;
    if (this.upload.url.length > 0){
      this.collection.add_imageToStorage(this.upload);
    }
    else {
      this.collection.upload_content(this.upload);
    }
  }
}
