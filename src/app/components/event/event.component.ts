import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'com',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  

@Input()  name="CULTURALS"
@Input()  title="TECHNICAL"
@Input()  date="20.04.2020"
@Input()  venue="AUDITORIUM"
 constructor() { }

  ngOnInit(): void {
  }

}
