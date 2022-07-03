import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //this is not the right way to get same service 
  //in different component
  //here we use redundant code everywhere
  //we have used this array in app.component.ts and footer.component.ts also
   
  memberData=[
    {name:'Peter',email:'peter@test.com'},
    {name:'Sam',email:'sam@test.com'},
    {name:'Bruce',emai:'bruce@test.com'},
    {name:'Rony',email:'rony@test.com'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
