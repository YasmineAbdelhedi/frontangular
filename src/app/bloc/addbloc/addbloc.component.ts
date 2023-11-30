import { Component } from '@angular/core';
import {Bloc} from "../models/bloc";
import {BlocService} from "../../services/bloc.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-addbloc',
  templateUrl: './addbloc.component.html',
  styleUrls: ['./addbloc.component.css']
})
export class AddblocComponent {
  bloc: Bloc = new Bloc() ;
  submitted= false;
  constructor(private blocservice : BlocService,
              private  router: Router)
  {}
  ngOnInit()
  {}
  onSubmit() {
    this.submitted = true;
    this.blocservice.addBloc(this.bloc).subscribe(data => console.log(data), error=> console.log(error));
    this.bloc = new Bloc();
    this.router.navigate(['/addbloc'])
  }

}
