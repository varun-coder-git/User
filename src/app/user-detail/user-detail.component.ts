import { Component, OnInit} from '@angular/core';
import { JSONPlaceHolderService } from '../services/jsonplace-holder.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private JSONPlaceHolder:JSONPlaceHolderService) { }

  ngOnInit(): void {
  }

}
