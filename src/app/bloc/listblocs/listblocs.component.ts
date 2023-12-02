import { Component, Input, OnInit } from '@angular/core';
import { Bloc } from 'src/app/bloc/models/bloc';
import { BlocService } from 'src/app/services/bloc.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listblocs',
  templateUrl: './listblocs.component.html',
  styleUrls: ['./listblocs.component.css']
})
export class ListblocsComponent implements OnInit {
  constructor(private blocService: BlocService) {
  }
blocdata:any=[];

  ngOnInit(): void {
    this.blocService.getAllBlocs().subscribe(( alldata) => {
      console.log(alldata);
      this.blocdata=alldata
    });

  }
}
