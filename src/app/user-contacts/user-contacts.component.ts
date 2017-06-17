import { Component, OnInit , Inject } from '@angular/core';
import { GetDataService } from '../get-data.service';
import {ActivatedRoute} from '@angular/router';
import {MdDialog} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';
import {MdProgressSpinnerModule} from '@angular/material';


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
  	this.getDataService.getJsonData('/users/usercontacts?user_token='+this.user_token).subscribe(res => this.analyseResponse(res));
  }

  mergeCands(){
    this.getDataService.getJsonData('/users/usercontacts/mergecands?user_token='+this.user_token).subscribe(res => this.analyseMCResponse(res));
    
    }
  analyseResponse(response){
    if(response.status =='success'){
      this.myData = response.data;
    }
    else{
      alert('Could not get user contacts');
    }
    
  }
  analyseMCResponse(response){
     if(response.status =='success'){
        this.merge_candidates = response.data
        setTimeout(() => 
        {
          this.openDialog();
        },
        400);
      }
      else{
        alert('Could not get user contacts');
      }
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
  loader = false;
  private sub: any;
  user_token: string;
  constructor(@Inject(MD_DIALOG_DATA) public data: any) { 
    console.log(data.length)
    this.loader = true;
  }

}