import { Component, OnInit , Inject } from '@angular/core';
import { GetDataService } from '../get-data.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-merge-suggestions',
  templateUrl: './merge-suggestions.component.html',
  styleUrls: ['./merge-suggestions.component.css']
})
export class MergeSuggestionsComponent implements OnInit {

	myData: Array<any>;
  	phone: string;
  	private sub: any;
  	constructor(private getDataService:GetDataService,private route:ActivatedRoute) { }

  	ngOnInit() {
  	 this.sub = this.route.params.subscribe(params => {
       this.phone = params['phone']; // (+) converts string 'phone' to a number

    });
  	this.getDataService.getJsonData('/users/usercontacts/mergecands?user_phone='+this.phone).subscribe(res => this.myData = res);
  }

}
