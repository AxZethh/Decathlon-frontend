import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-homepage',
  imports: [

  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  competitors: any[] = [];
  results: any[] = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<any[]>("http://localhost:8080/competitors").subscribe(result => {
      this.competitors = result;

    this.http.get<any[]>("http://localhost:8080/results").subscribe(results => {
      this.results = results;
      })
    })
  }

}
