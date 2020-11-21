import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  
{path:'user', loadChildren:'./user/user.module#UserModule'},
{path:'user-detail', loadChildren:'./user-detail/user-detail.module#UserDetailModule'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

