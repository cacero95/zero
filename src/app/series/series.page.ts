import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Upload_content } from '../models/usuario';
import { VisualSeriesComponent } from '../components/visual-series/visual-series.component';
import { ColectionsService } from '../services/colections.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  series = [];
  constructor(private modal:ModalController,
    private collection:ColectionsService) { }

  ngOnInit() {
    this.collection.getCollection().then((data:any)=>{
      this.series = data;
    })
  }
  async add_post (){
    let modal = await this.modal.create({
      component:VisualSeriesComponent
    });
    modal.present();
  }
}
