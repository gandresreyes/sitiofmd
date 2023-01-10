import { Component, OnInit, Renderer2 } from '@angular/core';
import textos from 'src/assets/json/textos.json'
import { IdiomasService } from '../../servicios/idiomas.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  flag:string = "";
  text:any = "";
  darkmode:boolean = false;
  constructor(private idiomaServ: IdiomasService, private renderer2: Renderer2) { }

  ngOnInit(): void {
    const confUser = window.matchMedia('(prefers-color-scheme: dark)');    
    if(confUser.matches){
      localStorage.setItem('darkmode','true');
    }
    this.text = textos.header.eng  
    this.flag = "eng"    
    var data = localStorage.getItem('darkmode')
    this.darkmode = (data=="true"?true:false)
    const bodyElemet = document.body;
    if(this.darkmode){
      localStorage.setItem('darkmode','true');
      this.renderer2.addClass(bodyElemet,'dark-mode')
    }else{
      localStorage.setItem('darkmode','false');
      this.renderer2.removeClass(bodyElemet,'dark-mode')
    }
  }
  idioma(idioma:string){
    this.idiomaServ.cambiarIdioma = idioma
    this.flag  = idioma
    if(idioma == "es"){
      this.text = textos.header.es
    }else{
      this.text = textos.header.eng
    }
  }

  darkMode(){
    const bodyElemet = document.body;
    if(this.darkmode){
      localStorage.setItem('darkmode','false');
      this.renderer2.removeClass(bodyElemet,'dark-mode')
    }else{
      localStorage.setItem('darkmode','true');
      this.renderer2.addClass(bodyElemet,'dark-mode')
    }
    var data = localStorage.getItem('darkmode')
    this.darkmode = (data=="true"?true:false)
  }

}
