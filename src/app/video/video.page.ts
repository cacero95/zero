import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  url:string;
  constructor(private alert:AlertController) { }

  ngOnInit() {
  }

  async add() {
    let alert = await this.alert.create({
      header:'Pega tu Url',
      inputs:[
        {
          type:'text',
          name:'url',
          placeholder:'URL'
        }
      ],
      buttons:[
        {
          text:'Confirmar',
          handler:(url)=>{
            console.log(url);
            this.url = url.url;
          }
        },
        {
          text:'Cancelar'
        }
      ]
    });
    alert.present();
  }

}
