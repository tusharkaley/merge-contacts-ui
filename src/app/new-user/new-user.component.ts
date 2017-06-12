import { Component, OnInit,Input } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { GetDataService } from '../get-data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
	formData: any = {};
	myData: Array<any>;
	firstname:string = '';
	lastname:string = '';
	emailid:string = '';
	phone:string = '';
	constructor(private getDataService:GetDataService,private router:Router) { }
	
	buttonStatus = true;
	
	firstnameError = true;
	lastnameError = true;
	phoneError = true;
	emailError = true;
	
	isfirstnameVal = false;
	islastnameVal = false;
	isphoneVal = false;
	isemailVal = false;

  	ngOnInit() {
  	}
  
  	submitData(event) {
  		this.formData.fname = this.firstname;
  		this.formData.lname = this.lastname;
  		this.formData.phone = this.phone;
  		this.formData.email = this.emailid;
  		this.getDataService.postData('/users/new',this.formData).subscribe(res => this.myData = res);
  		//console.log(this.myData);
  		this.router.navigate(['/']);
  		// if(this.myData['status'] == 'success'){
  		// 	console.log('success')
  		// 	this.router.navigate(['/']);
  		// }
  		// else{
  		// 	console.log('error')
  		// }

  	}
  
  	validateElement(event,elementName){
  	
	  	if(elementName == 'firstname'){
	  		if(this.firstname.length<2){
	  			this.firstnameError = false;
	  			this.isfirstnameVal = false;
	  		}
	  		else if(this.firstname.length>24){
	  			this.firstnameError = false;
	  			this.isfirstnameVal =  false;
	  		}
	  		else{
	  			this.firstnameError = true;
	  			this.isfirstnameVal = true;
	  		}
	  	}
	  	else if(elementName == 'lastname'){
	  		if(this.lastname.length == 0){
	  			this.lastnameError = false;
	  			this.islastnameVal = false;
	  		}		
	  		else if(this.lastname.length>30){
	  			this.lastnameError = false;
	  			this.islastnameVal = false;
	  		}
	  		else{
	  			this.lastnameError = true;
	  			this.islastnameVal = true;
	  		}
	  	}
	  	else if(elementName == 'emailid'){
	  		var re =/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
	  		var regexp = new RegExp(re);
	  		if(this.emailid.length == 0){
	  			this.emailError = false;
	  			this.isemailVal = false;
	  		}		
	  		else if(!regexp.test(this.emailid)){
	  			this.emailError = false;
	  			this.isemailVal = false;
	  		}
	  		else{
	  			this.emailError = true;
	  			this.isemailVal = true;
	  		}
	  	}
	  	else if(elementName == 'phone'){
	  		var regexpphone = new RegExp(/^\d+$/);
	  		if(this.phone.length<10){
	  			this.phoneError = false;
	  			this.isphoneVal = false;
	  		}
	  		else if(!regexpphone.test(this.phone)){
	  			this.phoneError = false;
	  			this.isphoneVal = false;
	  		}
	  		else{
	  			this.phoneError = true;
	  			this.isphoneVal = true;
	  		}
	  	}
	  	if(this.isphoneVal && this.isemailVal && this.islastnameVal && this.isfirstnameVal){
	  		this.buttonStatus = false;
	  	}
	  	else{
	  		this.buttonStatus = true;
	  	}

  	
  }

}
