import { Component, OnInit , Inject } from '@angular/core';
import { GetDataService } from '../get-data.service';
import {ActivatedRoute} from '@angular/router';
import {MdDialog} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-user-contacts',
  templateUrl: './user-contacts.component.html',
  styleUrls: ['./user-contacts.component.css']
})
export class UserContactsComponent implements OnInit {

  myData: Array<any>;
  merge_candidates:Array<any>;
  user_token: string;
  private sub: any;


  constructor(private getDataService:GetDataService,private route:ActivatedRoute,public dialog: MdDialog) { }
  
  ngOnInit() {
  	 this.sub = this.route.params.subscribe(params => {
       this.user_token = params['user_token']; // (+) converts string 'user_token' to a number

    });
  	this.getDataService.getJsonData('/users/usercontacts?user_token='+this.user_token).subscribe(res => this.myData = res);
  }

  mergeCands(){
    this.getDataService.getJsonData('/users/usercontacts/mergecands?user_token='+this.user_token).subscribe(res => this.merge_candidates = res);
    setTimeout(() => 
    {
      this.openDialog();
    },
    400);
    }

  openDialog() {
    //this.getDataService.getJsonData('/users/usercontacts/mergecands?user_user_token='+this.user_token).subscribe(res => this.merge_candidates = res);
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog ,  {
        data: this.merge_candidates,
    });
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  phone: string;

  private sub: any;

  constructor(@Inject(MD_DIALOG_DATA) public data: any) { }

}