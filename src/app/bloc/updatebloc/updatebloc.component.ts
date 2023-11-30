import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bloc} from "../models/bloc";

@Component({
  selector: 'app-updatebloc',
  templateUrl: './updatebloc.component.html',
  styleUrls: ['./updatebloc.component.css']
})
export class UpdateblocComponent implements OnInit{
  @Input()
  bloc! : Bloc;

  @Input()
  ajout!:boolean;


  @Output()
  blocUpdated = new EventEmitter<Bloc>();
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateBloc ",this.bloc);
  }

  saveBloc(){
    this.blocUpdated.emit(this.bloc);
  }

}
