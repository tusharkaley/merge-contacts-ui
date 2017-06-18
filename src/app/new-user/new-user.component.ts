import { Component, OnInit,Input } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { GetDataService } from '../get-data.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators , FormsModule, FormBuilder , ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
	

  	userForm : FormGroup;
	constructor(private getDataService:GetDataService,private router:Router,fb: FormBuilder) { 
		
		this.userForm = fb.group({
	      'firstName' : [null, Validators.required],
	      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
	      'phone' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(12),Validators.pattern('[0-9]+')])],
	      'email' : [null, Validators.compose([Validators.required,Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+..[a-zA-Z{1}.]+')])]
	      
	    })

	}
	submitForm(value: any){
    	this.getDataService.postData('/users/new',JSON.stringify(value)).subscribe(
  					(result) => {
   							 this.analyseResponse(result);
  							});
  	}
	
  	ngOnInit() {
  		
  	}
  	
  	analyseResponse(data){
  		if(data.status == 'success'){
  			this.router.navigate(['/']);
  		}
  		else{
  			alert(data.resop_text);
  		}
  	}


}
