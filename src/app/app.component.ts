import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { User } from './user.model';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'express_example';
  message :any;
  //displaydata : User[]= [];

  displaydata: User[];
  
  constructor(private apiService : ApiService){

  }
  ngOnInit(){
    /*this.apiService.getMessage().subscribe(data => {
      this.message = data;
    });*/

    /*this.apiService.getUserdetail().subscribe((data) => {
     console.log(data);
      //this.displaydata = data;
    })*/

    this.apiService.getAll().subscribe(data => {
      this.displaydata = data;
      console.log(data);
      },
      error => {
        console.log(error);
      })
  }
}
