import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JSONPlaceHolderService } from '../services/jsonplace-holder.service';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';

interface DialogData {
  email: string;
}

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  public title="Add New User Form";
  ngOnInit(): void {
  }
  constructor(private  dialogRef:  MatDialogRef<NewUserComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any,private service:JSONPlaceHolderService) {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


  onClear(): void{

    this.service.form.reset();
  }
}
