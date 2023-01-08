import { Component, OnInit } from '@angular/core';
import textoPrtafolio from 'src/assets/json/textosproltafolio.json'
import { IdiomasService } from '../../servicios/idiomas.service';
import flores from 'src/assets/json/flores.json'
import categorias from 'src/assets/json/categorias.json'
import { filter } from 'rxjs';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  textos:string=""
  categoriaObj:any ;
  buscar:string = "";
  floresfilter:any = [];
  filterActive:string = "";
  result:any = [];

  constructor(private idiomaserv :IdiomasService) { }

  ngOnInit(): void {
    
    this.categoriaObj = categorias
    this.floresfilter = flores  
      
    this.idiomaserv.IdiomaAction$.subscribe(arg => {
      if (arg == "es") {
        this.textos = textoPrtafolio.potafolio.es      

      } else {
        this.textos = textoPrtafolio.potafolio.eng
      }
    })
  
  }

  filtro(id:string){    
    this.floresfilter = this.floresfilter.filter((flor:any)=>flor.id_cat == id)
    this.filterActive = id
  }
  buscarflores(element:any){
    if(element==""){   
      if(this.filterActive !=""){
        this.result = this.floresfilter.filter((flor:any)=>flor.id_cat == this.filterActive)
      }else {
        this.result = this.floresfilter
      }        
      return this.result
    }else{
      this.result = this.floresfilter.filter((flores:any)=>flores.nombre.toLowerCase().includes(element.toLowerCase()))
      return this.result
    }
  }

}
