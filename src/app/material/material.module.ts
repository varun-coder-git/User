import { NgModule } from '@angular/core';
import { MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio'
const MaterialComponents=[
  
  MatTableModule,
  MatPaginatorModule,
  MatMenuModule, 
  MatButtonModule, 
  MatToolbarModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule

];
@NgModule({
 
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
