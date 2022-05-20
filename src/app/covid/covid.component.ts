import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  public covidInfo: any;

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.covidService.getCovidInfo().subscribe(
      (posRes)=>{
        this.covidInfo = posRes;
      },(errRes:HttpErrorResponse)=>{
        console.log(errRes);
      }
    )

  }

}
