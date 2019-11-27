import { Component, OnInit } from '@angular/core';
import { Platform, AlertController, ModalController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { DbaService } from '../services/dba.service';
import { map } from 'rxjs/operators';
import { DataColectorComponent } from '../components/data-colector/data-colector.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  current_song;
  toolbar = [
    {
      title:'Tesis',
      icon:'assets/img/pawprint.svg',
      value:0,
      content:{
        overall:`
        La tesis consistio en un servicio centralizado donde no solo da la experiencia de una red social de mascotas,
         tambien brinda la posibilidad que las diferentes entidades animalista puedan
        puedan publicitar sus servicios y fidelizar sus clientes a traves de notificaciones en tiempo real
        `
      }
    },
    {
      title:'Music',
      icon:'assets/img/play_button.svg',
      value:1,
      content:{
        overall:`Rock | Metal | Relax`,
        list:[]
      }
    },
    {
      title:'Games',
      icon:'assets/img/ps.svg',
      value:2,
      content: {
        overall: `ps4, ps vita, ps1, Xbox, Xbox 360 games`,
        list:[]
      }
    }
  ];

  status = 1;
  play:any;
  constructor(private camera:Camera,
    private dba:DbaService,
    private platform:Platform,
    private alert:AlertController,
    private modal:ModalController) {}

  ngOnInit() {
    
    this.dba.get_music().subscribe((songs)=>{
      let canciones:any = songs;
      this.toolbar[1].content.list = canciones;
    });

    this.dba.get_images().subscribe((imgs)=>{
      console.log(imgs)
      this.toolbar[2].content.list = imgs;
    })
  }

  change_content(value){
    this.status = value;
  }
  change_song(song){
    if (!this.play){
      this.play= document.getElementById('reproductor');
    }
    this.current_song = song;
    try {
      this.play.play();
    }
    catch(err) {
      console.log(err);
    }
  }
  changeListener(event) : void {
    
    if (event.target.files.length > 0){
      this.dba.upload_content(event.target.files);
    }
  }
  // este metodono solo añade una imagen sino tambien una descripción
  async add_image(){

    let modal = await this.modal.create({
      component:DataColectorComponent,
      animated:true,
      mode:"ios"
    });
    modal.present();
    
  }
}
