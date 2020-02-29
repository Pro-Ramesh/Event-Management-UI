import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'com-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventlist:any;
  
  constructor(
    private httpClient: HttpClient){
   }

  ngOnInit(): void {
    this.getEventList();
  }
getEventList(){
  let url="http://localhost:8080/event/event/list";
  this.httpClient.get(url).subscribe(Response => {
    this.eventlist=Response;

  });

}
}