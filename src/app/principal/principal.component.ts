import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  valorTotal: string = '';
  valorAtual: string = '';
  valorAnterior: string = '';
  constructor() { }

  ngOnInit() {
  }

  addOnInput(val: string){
    let antes = this.valorAtual;
    let atual = val;
    let pegaUltimo = antes.slice(-1);
    if((pegaUltimo == '+' && atual == '+')){
      return;
    }
    if((pegaUltimo == '-' && atual == '-')){
      return;
    }
    if((pegaUltimo == '/' && atual == '/')){
      return;
    }
    this.valorAtual += val;
      switch(val)
      {
        case '=':
        {
          this.valorTotal = this.valorAtual.substring(0, this.valorAtual.length -1);
          this.valorTotal = eval(this.valorTotal)
          this.valorAnterior = this.valorTotal
          this.valorAtual = '';
        };
        case 'ac':
        {
          this.valorAtual = '';
        }
      } 
  }

  // sum(mais){
  //   this.valorAtual =+ mais
  // }

  

}
