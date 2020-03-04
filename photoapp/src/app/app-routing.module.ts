import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoupComponent } from '../app/photoup/photoup.component'

const routes: Routes = [
  {path: "", component: PhotoupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
