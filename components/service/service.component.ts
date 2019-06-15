import { Component, OnInit } from '@angular/core';
import { FatchDataService } from '../../service/fatch-data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  result : any;
  constructor( private _fetchData: FatchDataService ) { }

  ngOnInit() {
    this.result = this._fetchData.data;
  }

}
