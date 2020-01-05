import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  
  index = [
    {
      title:'INICIO',
    },
    {
      title:'CHILDREN'
    },
    {
      title:'TIENDA',
      children:[
        "PARTES DE MOTOR",
        "TREN DE RODAJE",
        "KIT HIDRÁULICO",
        "FILTRACIÓN",
        "HERRAMIENTA DE CORTE"
      ]
    },
    {
      title:"LINEAS",
      children:[
        "Tren de rodaje",
        "Partes de Motor",
        "Herramientas de corte",
        "Filtración",
        "Kit Hidráulico",
        "Lubricantes"
      ]
    },
    {
      title:"NOTICIAS",
      children:[
        "blog"
      ]
    },
    {
      title:"CONTACTENOS"
    },
    {
      title:"CATALOGOS",
      children:[
        "JOHN DEERE",
        "KOMATSU"
      ]
    }
  ];
  contador_clase = "INICIO";
  contador = 0;
  slides = [
    {
      img:"assets/img/slide1_final.jpg"
    },
    {
      img:"assets/img/slide2_final.jpg",
      
    },
    {
      img:"assets/img/slide3_final.jpg"
    }
  ]  
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.contador = this.contador == 2 ? 0:this.contador+1;
    }, 10000);
  }
  changeSlide(event){
    
  }
}
