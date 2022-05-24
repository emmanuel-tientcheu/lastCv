import { Component, OnInit } from '@angular/core';
import { competance } from '../competanceStructure';
import {  DbServiceInformation } from '../services/db.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  competance:competance[]=[];

  constructor(private dbCompetance:DbServiceInformation) { }

  ngOnInit(): void {
    this.dbCompetance.getInformationCompetance().subscribe((res)=>{
       console.table(res);
    })
  }

}
