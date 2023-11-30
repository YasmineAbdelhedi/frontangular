import {Component, Input, OnInit} from '@angular/core';
import { Bloc } from 'src/app/bloc/models/bloc';
import { BlocService } from 'src/app/services/bloc.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-listblocs',
    templateUrl: './listblocs.component.html',
    styleUrls: ['./listblocs.component.css']
})
export class ListblocsComponent implements OnInit {

    blocs! : Bloc[];

    @Input()
    ajout:boolean= true;

    updatebloc:Bloc= {"idBloc":0,"nomBloc":"", "capaciteBloc":0, "foyer":0};
    constructor(private blocService : BlocService) { }

    ngOnInit(): void {
        this.blocService.getAllBlocs().subscribe(tab => {this.blocs = tab._embedded.blocs;
            console.log(tab);
            //embedded contient le tableau depart
          this.blocs.push({ idBloc: 1, nomBloc: 'Bloc1', capaciteBloc: 10, foyer: 1 });
          this.blocs.push({ idBloc: 2, nomBloc: 'Bloc2', capaciteBloc: 15, foyer: 1 });

        });

    }
    blocUpdated(tab:Bloc){
        console.log("bloc updated event",tab);
        this.blocService.addBloc(tab).subscribe( ()=> this.chargerblocs());
    }

    chargerblocs(){
        this.blocService.getAllBlocs().subscribe(tab => {this.blocs =tab._embedded.departements;
            console.log(tab);
        });
    }

    updateb(tab:Bloc) {
        this.updatebloc=tab;
        this.ajout=false;
    }
    deleteb(id: number) {
        this.blocService.deleteBloc(id).subscribe(
            data => {
                console.log(data);
                this.chargerblocs();
            },
            error => console.log(error)
        );
    }
}
