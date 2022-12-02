import { Component, OnInit } from '@angular/core';

import textos from 'src/assets/json/textos.json'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  text:any = ""
  constructor() { }

  ngOnInit(): void {
    this.text = textos.header.eng
    console.log(this.text)   
  }

}
