import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service in ANgular';
  memberData=[
    {name:'Peter',email:'peter@test.com'},
    {name:'Sam',email:'sam@test.com'},
    {name:'Bruce',emai:'bruce@test.com'},
    {name:'Rony',email:'rony@test.com'},
  ]
}
