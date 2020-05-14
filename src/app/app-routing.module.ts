import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { AnotherpageComponent } from './anotherpage/anotherpage.component';


const routes: Routes = [
  { path: '', component: PageComponent },
  { path: 'another-page', component: AnotherpageComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
