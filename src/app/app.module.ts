import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//firebase modules
import * as firebase from 'firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
// app components
import { SigninComponent } from './components/signin/signin.component';
import { MenuComponent } from './components/menu/menu.component';
import { Camera } from '@ionic-native/camera/ngx';
import { DataColectorComponent } from './components/data-colector/data-colector.component';
import { VisualSeriesComponent } from './components/visual-series/visual-series.component';


const firebaseConfig = {
  apiKey: "AIzaSyAFZM0alQjAav-AxG7i4mCJ5r6iw7FlTlY",
    authDomain: "atomic-snow-220819.firebaseapp.com",
    databaseURL: "https://atomic-snow-220819.firebaseio.com",
    projectId: "atomic-snow-220819",
    storageBucket: "atomic-snow-220819.appspot.com",
    messagingSenderId: "660910679754",
    appId: "1:660910679754:web:34fa0511807f61c262b633"
};
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent,SigninComponent,MenuComponent,DataColectorComponent,VisualSeriesComponent],
  entryComponents: [SigninComponent,MenuComponent,DataColectorComponent, VisualSeriesComponent],
  imports: [BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
     IonicModule.forRoot(),
      AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
