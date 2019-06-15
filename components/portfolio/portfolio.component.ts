import { Component, OnInit } from '@angular/core';
import { FetchDataAPIService } from '../../service/FetchDataApi.services';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  result: any;
  imgWidth:number= 165;

  constructor( private _fetchData: FetchDataAPIService ) { }

  ngOnInit() {
    this.result = this._fetchData.data;
  }

}
