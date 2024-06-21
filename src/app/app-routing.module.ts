import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { MainContentComponent } from './main-content/main-content.component';
import { VideoListComponent } from './video-list/video-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: MainContentComponent },
  { path: 'trending', component: VideoListComponent },
  { path: 'subscriptions', component: UnderConstructionComponent },
  { path: 'your-channel', component: UnderConstructionComponent },
  { path: 'history', component: UnderConstructionComponent },
  { path: 'playlist', component: UnderConstructionComponent },
  { path: 'your-videos', component: UnderConstructionComponent },
  { path: 'watch-later', component: UnderConstructionComponent },
  { path: 'liked-videos', component: UnderConstructionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
