import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  contador = 0;
  slides = [
    "assets/img/slide1_final.jpg",
    "assets/img/slide2_final.jpg",
    "assets/img/slide3_final.jpg"
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
