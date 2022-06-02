import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RandomComponent } from './components/random/random.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'random', component: RandomComponent },
  { path : 'list', component: ListComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
