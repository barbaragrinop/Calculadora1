import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  valorTotal = 0;
  constructor() { }

  ngOnInit() {
  }

  addOnInput(val: number){
    this.valorTotal += val;
  }

}
