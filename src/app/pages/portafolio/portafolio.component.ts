import { Component, OnInit } from '@angular/core';
import textoPrtafolio from 'src/assets/json/textosproltafolio.json'
import { IdiomasService } from '../../servicios/idiomas.service';
import flores from 'src/assets/json/flores.json'
import categorias from 'src/assets/json/categorias.json'
import { ActivatedRoute, Router } from '@angular/router';


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
  vacio:boolean = false
  constructor(private idiomaserv :IdiomasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    window.scroll(0, 0)
    this.categoriaObj = categorias
    this.floresfilter = flores  
      
    this.idiomaserv.IdiomaAction$.subscribe(arg => {
      if (arg == "es") {
        this.textos = textoPrtafolio.potafolio.es      

      } else {
        this.textos = textoPrtafolio.potafolio.eng
      }
    })

    this.route.params.subscribe(
      (params:any)=>{
        if( !params.hasOwnProperty('filtro')){
          this.viewAll()
        }else{
          this.filtro(params.filtro)
        }
        
      }
    )   
  
  }
  viewAll(){
    this.filterActive = ""
    this.floresfilter = flores;
    this.buscar = ""    
    history.pushState(null, "", '#/productos');
    
  }

  filtro(id:string){    
    this.floresfilter = flores.filter((flor:any)=>flor.id_cat == id)    
    this.filterActive = id    
    history.pushState(null, "", '#/productos/'+id);
    
  }
  buscarflores(element:any){
    if(element==""){   
      if(this.filterActive !=""){
        this.result = flores.filter((flor:any)=>flor.id_cat == this.filterActive)
        if(this.result==""){
          this.vacio= true;
        }        
      }else {        
        this.result = this.floresfilter        
      }             
      return this.result
    }else{      
      this.result =this.floresfilter.filter((flores:any)=>flores.nombre.toLowerCase().includes(element.toLowerCase()))      
      return this.result
    }
  }

}
