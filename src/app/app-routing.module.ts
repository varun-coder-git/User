import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailModule } from './user-detail/user-detail.module';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';
import { NewUserComponent } from './new-user/new-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './helper/auth.guard';

const routes: Routes = [

  
  //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'user', loadChildren: () => UserModule },
  { path: 'user-detail', loadChildren: () => UserDetailModule },
  { path: 'user-list', component: UserListComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'add/:id', component: EditUserComponent },
  { path: 'edit/:id', component: EditUserComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
