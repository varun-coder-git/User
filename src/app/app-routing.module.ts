import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailModule } from './user-detail/user-detail.module';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';


const routes: Routes = [

  { path: 'user', loadChildren: () => UserModule },
  { path: 'user-detail', loadChildren: () => UserDetailModule }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
