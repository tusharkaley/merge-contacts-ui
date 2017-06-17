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
    	return this.http.get('https://mcapiweb.com'+route).map(response => response.json());

  	}

  	postData(route,data){
  		let headers = new Headers({ 'Content-Type': 'text/plain'});
    	let options = new RequestOptions({ headers: headers });

    	return this.http.post('https://mcapiweb.com'+route, data, options).map(response => response.json());
      
  	}

    
}
  

