import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { GetDataService } from '../get-data.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  	formData: any = {};
  	myData: Array<any>;
  	private sub: any;
  	urlParam: string;
	firstname:string = '';
	lastname:string = '';

	phone1:string = '';
	phone2:string = '';
	phone3:string = '';
	phone4:string = '';
	
	email1:string = '';
	email2:string = '';
	email3:string = '';
	email4:string = '';
	
	constructor(private getDataService:GetDataService,private router:Router,private route:ActivatedRoute) { }
	errormsg = true;
	buttonStatus = true;
	
	firstnameError = true;
	lastnameError = true;
	isfirstnameVal = false;
	islastnameVal = false;
	

	
  	ngOnInit() {
  	}
  
  	submitData(event) {
  		if(this.isFormEmpty()){
  			this.errormsg = false;
  		}
  		else{
  			this.errormsg = true;
  			this.formData.phone_numbers = []
  			// var arr = []
  			// arr.push(this.phone1);
	  		// arr.phone2.push(this.phone2);
	  		// arr.phone3.push(this.phone3);
	  		// arr.phone4.push(this.phone4);
  			this.formData.email_ids = []
  			this.formData.phone_numbers.push(this.phone1);
	  		this.formData.phone_numbers.push(this.phone2);
	  		this.formData.phone_numbers.push(this.phone3);
	  		this.formData.phone_numbers.push(this.phone4);
	  		this.formData.email_ids.push(this.email1);
	  		this.formData.email_ids.push(this.email2);
	  		this.formData.email_ids.push(this.email3);
	  		this.formData.email_ids.push(this.email4);
	  		this.formData.fname = this.firstname;
  			this.formData.lname = this.lastname;
	  		
	  		this.sub = this.route.params.subscribe(params => {
		       this.urlParam = params['user_token']; // (+) converts string 'phone' to a number

		    });
		    this.formData.user_token =  this.urlParam 
	  		this.getDataService.postData('/users/usercontacts/new',this.formData).subscribe(res => this.myData = res);
	  		this.router.navigate(['/users/'+this.urlParam+'/contacts']);
  		}
  		
  		//console.log(this.formData);
  	}
  	isFormEmpty(){
  		if(this.phone1 == '' && this.phone2 =='' && this.phone3 =='' && this.phone4 =='' && this.email1=='' && this.email2 =='' && this.email3 =='' && this.email4 =='')
  		{
  			return true;
  		}
  		else{
  			return false;
  		}
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

	  	if(this.islastnameVal && this.isfirstnameVal){
	  		this.buttonStatus = false;
	  	}
	  	else{
	  		this.buttonStatus = true;
	  	}

  	
  }

}
