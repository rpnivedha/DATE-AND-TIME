import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project01',
  templateUrl: './project01.component.html',
  styleUrls: ['./project01.component.css']
})
export class Project01Component implements OnInit {
  Date1 : Date = new Date();
  LocalDATE : string = new Date().toLocaleString();
  constructor() { }

  ngOnInit(): void {
  }

}
