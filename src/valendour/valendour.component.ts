import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-valendour',
  templateUrl: './valendour.component.html',
  styleUrls: ['./valendour.component.css']
})
export class ValendourComponent implements OnInit {

  valendour: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.getValendour();
  }


  getValendour() {
    this.http.get('http://localhost:59946/api/Valendour/').subscribe(response => {
    this.valendour = response;
    }, error => {
      console.log(error);
    });
  }

}
