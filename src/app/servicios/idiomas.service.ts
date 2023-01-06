import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {
  private idiomaObs = new BehaviorSubject<string>("eng")

  constructor() { }
  

  get IdiomaAction$():Observable<string>{
    return this.idiomaObs.asObservable();
  }

  set cambiarIdioma(idioma: string){    
    this.idiomaObs.next(idioma)
  }
}
