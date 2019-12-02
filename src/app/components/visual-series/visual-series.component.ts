import { Platform, AlertController } from '@ionic/angular';
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
  constructor(private collection:ColectionsService,
    private camera:Camera,
    private alert:AlertController,
    private platform:Platform) { }

  ngOnInit() {
    
  }
  

  show_camera(){
    if (this.platform.is('cordova')){
      
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
    let content:Upload_content = {
      name: new Date().valueOf().toString(),
      description,
      url:"" 
    }
    this.collection.upload_content(content)
  }
}
