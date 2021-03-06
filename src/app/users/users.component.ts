import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  myData: Array<any>;
  constructor(private getDataService:GetDataService) { }
  
  ngOnInit() {
  	this.getDataService.getJsonData('/users').subscribe(res => this.analyseResponse(res));

  	
  }
  analyseResponse(response){
  	if(response.status == 'success'){
  		this.myData = response.data;
  	}
  	else{
  		alert('Error in getting users');
  	}
  }

}
