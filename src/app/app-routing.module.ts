import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },  { path: 'series', loadChildren: './series/series.module#SeriesPageModule' },
  { path: 'share-content', loadChildren: './share-content/share-content.module#ShareContentPageModule' },
  { path: 'video', loadChildren: './video/video.module#VideoPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
