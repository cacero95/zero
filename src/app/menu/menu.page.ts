import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon:'home'
    },
    {
      title:'Login',
      url: '/menu/login',
      icon:'people'
    }
  ];
  constructor(private router:Router,
    private menu:MenuController) { }

  ngOnInit() {
  }
  navegar(url){
    this.menu.toggle().then(()=>{
      this.router.navigate([`/${url}`])
    })
  }
}
