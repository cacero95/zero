import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Upload_content } from '../models/usuario';
import { VisualSeriesComponent } from '../components/visual-series/visual-series.component';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  content:Upload_content[] = [];
  constructor(private modal:ModalController) { }

  ngOnInit() {
  }
  async add_post (){
    let modal = await this.modal.create({
      component:VisualSeriesComponent
    });
    modal.present();
  }
}
