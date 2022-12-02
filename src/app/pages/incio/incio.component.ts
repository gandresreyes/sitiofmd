import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import createGlobe from 'cobe'
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';




@Component({
  selector: 'app-incio',
  templateUrl: './incio.component.html',
  styleUrls: ['./incio.component.css']
  
})
export class IncioComponent implements OnInit { 

  
  @ViewChild('canvas') canvas!:ElementRef

  constructor() { }

  ngOnInit(): void {  
   
  }
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
      mapSamples: 16000,
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
    
  }

}
