import { Component, OnInit } from '@angular/core';
import textosac from 'src/assets/json/textosacercade.json';
import { IdiomasService } from '../../servicios/idiomas.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  textos:any;
  constructor(private servicioidioma:IdiomasService) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.servicioidioma.IdiomaAction$.subscribe(arg => {
      if(arg == "es"){
          this.textos=textosac.acercade.es
      }else {
        this.textos = textosac.acercade.eng
      }
    })
    console.log(this.textos)
  }

}
