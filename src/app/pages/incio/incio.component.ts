import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import createGlobe from 'cobe'
import categorias from 'src/assets/json/categorias.json'
import { IdiomasService } from '../../servicios/idiomas.service';
import textoInicio from 'src/assets/json/textosinicio.json'


@Component({
  selector: 'app-incio',
  templateUrl: './incio.component.html',
  styleUrls: ['./incio.component.css']
  
})
export class IncioComponent implements OnInit { 

  
  //@ViewChild('canvas') canvas!:ElementRef ;
  @ViewChild('uno') uno!:ElementRef;
  @ViewChild('dos') dos!:ElementRef;
  @ViewChild('tres') tres!:ElementRef;
  categoriaObj:any ;  
  textos:string = "";

  constructor(private idiomaserv: IdiomasService, private renderer2: Renderer2) { }

  ngOnInit(): void {  
   this.categoriaObj = categorias
   this.idiomaserv.IdiomaAction$.subscribe(arg=>{      
      if(arg == "es"){
        this.textos = textoInicio.inicio.es        
        this.renderer2.addClass(this.uno.nativeElement,'unoes')
        this.renderer2.addClass(this.dos.nativeElement,'doses')
        this.renderer2.addClass(this.tres.nativeElement,'treses')
        
      }else{
        this.textos = textoInicio.inicio.eng
        this.renderer2.removeClass(this.uno.nativeElement,'unoes')
        this.renderer2.removeClass(this.dos.nativeElement,'doses')
        this.renderer2.removeClass(this.tres.nativeElement,'treses')
      }     
   })
    
  }ngAfterViewInit():void{
    
  }
 
  /*
  ngAfterViewInit():void{
    let canvas = this.canvas.nativeElement
    let phi = 0 
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: -50,
      dark: 0,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 10000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0, 0, 1],
      glowColor: [1, 1, 1],
      offset: [0, 0],
      opacity:0.8,
    markers: [
        { location: [37.7595, -122.4367], size: 0.03 },       
        { location: [4.3556, -74.0451], size: 0.1 },//bogota
        { location: [25.7751, -80.2105], size: 0.1 },//miami
        { location: [28.4153, -81.2988], size: 0.05 },//orlando
        { location: [40.4250, -74.0001], size: 0.05 },//new york
        { location: [51.3030, 0.0732], size: 0.05 },//londres
        { location: [52.3128, 13.2438], size: 0.05 },//alemania
        { location: [48.5142, 2.2056], size: 0.05 },//paris
        { location: [40.2459, 3.4209], size: 0.05 },//españa
      ],
      onRender: (state) => {      
        state['phi'] = phi
        phi += 0.01        
      },
    });
    
  }*/

}
