import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
        list:[
          {
            url:'https://firebasestorage.googleapis.com/v0/b/atomic-snow-220819.appspot.com/o/Linkin%20Park%20-%20One%20Step%20Closer%20(Lyrics).mp3?alt=media&token=cb02c42c-0b62-4812-aa3a-fb5e44803671',
            name:'Linkin Park - One Step Closer (Lyrics).mp3'
          },
          {
            url:'https://firebasestorage.googleapis.com/v0/b/atomic-snow-220819.appspot.com/o/SawanoHiroyuki%5BnZk%5D%20-%E3%80%8CREMEMBER%E3%80%8Dft.%20Mizuki%2C%20Gemie%2C%20Tielle%2C%20naNami%20_%20Yosh.mp3?alt=media&token=398ff9bd-3b4e-46d7-af0e-f446430131a1',
            name:'SawanoHiroyuki[nZk] -「REMEMBER」ft. Mizuki, Gemie, Tielle, naNami _ Yosh.mp3'
          }
        ]
      }
    },
    {
      title:'Games',
      icon:'assets/img/ps.svg',
      value:2,
      content: {
        overall: `ps4, ps vita, ps1, Xbox, Xbox 360 games`
      }
    }
  ];

  status = 0;
  constructor(private camera:Camera) {}

  change_content(value){
    this.status = value;
  }
  add(){
    switch(this.status){
      case 0:
        break;
      case 1: 
        break;
      case 2:
        break;
    }
  }
}
