import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import categorias from 'src/assets/json/categorias.json'
import { IdiomasService } from '../../servicios/idiomas.service';
import textoInicio from 'src/assets/json/textosinicio.json'
import { CorreosApiService } from '../../servicios/correos-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-incio',
  templateUrl: './incio.component.html',
  styleUrls: ['./incio.component.css']
  
})
export class IncioComponent implements OnInit { 

  
 // @ViewChild('canvas') canvas!:ElementRef ;
  @ViewChild('uno') uno?:ElementRef;
  @ViewChild('dos') dos?:ElementRef;
  @ViewChild('tres') tres?:ElementRef;
  categoriaObj:any ;  
  textos:string = "";
  cobe:number = 0;
  idiomaes:boolean = false;
  enviando:boolean = false;
  texto:string  = "Submit";
  enviado:boolean = false;

  constructor(private idiomaserv: IdiomasService, private renderer2: Renderer2, private apicorreo:CorreosApiService, private fb:FormBuilder) {}
  formCorreo!:FormGroup;

  ngOnInit(): void {
    this.iniciaForm();
    window.scroll(0, 0)
    this.categoriaObj = categorias    
    this.idiomaserv.IdiomaAction$.subscribe(arg => {      
      if (arg == "es") {
        this.idiomaes = true
        this.textos = textoInicio.inicio.es
        this.renderer2.addClass(this.uno?.nativeElement, 'unoes')
        this.renderer2.addClass(this.dos?.nativeElement, 'doses')
        this.renderer2.addClass(this.tres?.nativeElement, 'treses')

      } else {
        this.textos = textoInicio.inicio.eng
        this.idiomaes = false
        this.renderer2.removeClass(this.uno?.nativeElement, 'unoes')
        this.renderer2.removeClass(this.dos?.nativeElement, 'doses')
        this.renderer2.removeClass(this.tres?.nativeElement, 'treses')
      }
    })
   
  }
  iniciaForm(){
    this.formCorreo=this.fb.group({
      nombres:['',[Validators.required,Validators.minLength(3)]],
      correo:['',[Validators.required,,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(7)]],
      subject:['',[Validators.required,Validators.minLength(5)]],
      mensaje:['',[Validators.required,Validators.minLength(5)]]

    })
  }

  validarNum(phone:string){
    this.formCorreo.controls[phone].valueChanges.subscribe((change:any)=>{
      var valor = change.replace(/[a-zA-Z]/g,'').trim();    
     
      this.formCorreo.get(phone)?.patchValue(valor,{emitEvent: false});
    });
  }
  get nombresNV(){
    return(
      this.formCorreo.get('nombres')?.invalid &&
      this.formCorreo.get('nombres')?.touched
    )
  }
  get correoNV(){
    return(
      this.formCorreo.get('correo')?.invalid &&
      this.formCorreo.get('correo')?.touched
    )
  }
  get phoneNV(){
    this.validarNum('phone');
    return(
      this.formCorreo.get('phone')?.invalid &&
      this.formCorreo.get('phone')?.touched
    )
  }
  get subjectNV(){
    return(
      this.formCorreo.get('subject')?.invalid &&
      this.formCorreo.get('subject')?.touched
    )
  }
  get mensajeNV(){
    return(
      this.formCorreo.get('mensaje')?.invalid &&
      this.formCorreo.get('mensaje')?.touched
    )
  }

  sendEmail(){
    if(this.formCorreo.invalid){
      return Object.values(this.formCorreo.controls).forEach((control) =>{
        control.markAllAsTouched();
      })
    }else{
      this.enviando=true
      this.texto= "Sending"
      this.apicorreo.sendMail(this.formCorreo.value).subscribe(  
        {
        next:(data:any) =>{          
          this.enviando = false
          this.formCorreo.reset();
          this.texto= "Submit"
          this.enviado=true

        },error:(error:any)=>{
          console.log(error)
          this.enviando = false
        }
      }
        
      )
      
    }

  }
  
  ngAfterViewInit():void{
    if(this.idiomaes){
      this.renderer2.addClass(this.uno?.nativeElement, 'unoes')
      this.renderer2.addClass(this.dos?.nativeElement, 'doses')
      this.renderer2.addClass(this.tres?.nativeElement, 'treses')
    }
    
  }

}
