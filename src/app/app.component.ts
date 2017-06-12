import { Component } from '@angular/core';
import { Http } from '@angular/http'
import { GetDataService } from './get-data.service';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetDataService]
})
export class AppComponent {
  title = 'Merge contacts';

  constructor() {
  		
  }

}
