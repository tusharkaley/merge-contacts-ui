import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class GetDataService {

  	constructor (
    	private http: Http
  	)	 	{}
  	getJsonData(route) {
    	return this.http.get('http://ec2-13-58-171-21.us-east-2.compute.amazonaws.com/'+route).map(response => response.json());
  	}

  	postData(route,data){
  		let headers = new Headers({ 'Content-Type': 'text/plain'});
    	let options = new RequestOptions({ headers: headers });

    	return this.http.post('http://ec2-13-58-171-21.us-east-2.compute.amazonaws.com/'+route, data, options).map(response => response.json());
  	}

    
}
  

