import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Upload_content } from '../models/usuario';
import { VisualSeriesComponent } from '../components/visual-series/visual-series.component';
import { ColectionsService } from '../services/colections.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  series = [];
  constructor(private modal:ModalController,
    private collection:ColectionsService,
    private http:HttpClient) { }

  ngOnInit() {
    this.collection.getCollection().then((data:any)=>{
      this.series = data;
      console.log(this.series);
      for(let test of this.series){
        console.log(test.data());
      }
    })
  }
  async add_post (){
    let modal = await this.modal.create({
      component:VisualSeriesComponent
    });
    modal.present();
  }
  push_funtions(){
    let test:Upload_content = {
      name:"2019 diciembre 10",
	    description:"this is a test for firebase functions",
	    url:"https://www.pushwoosh.com/blog/content/images/2019/03/regular_push_notification_flow-1.png"
    }
    this.http.post("https://us-central1-atomic-snow-220819.cloudfunctions.net/updateDataDba",test,{
      responseType:"text"
    }).subscribe((data)=>{
      console.log(data)
    },err=>{
      console.log(err)
    })
  }
}
