import {Component, OnInit} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatButton, MatIconButton} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-competitor',
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatFormField,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    MatIcon,
    MatIconButton,
    MatTooltip,
  ],
  templateUrl: './competitor.component.html',
  styleUrl: './competitor.component.css'
})
export class CompetitorComponent implements OnInit{
  name!: string;
  age!: number;
  country!: string;
  height!: number;
  weight!: number;
  competitors!: any[];

  constructor(private http: HttpClient) {
  }

  buildCompetitor(): Object {
    return {
      'name': this.name,
      'age': this.age,
      'country': this.country,
      'height': this.height,
      'weight': this.weight
    }
  }

  ngOnInit() {
    this.http.get<any[]>("http://localhost:8080/competitors").subscribe(competitors => {
      this.competitors = competitors;
    })
  }
  submitCompetitor() {
    this.http.post<any[]>("http://localhost:8080/competitors", this.buildCompetitor()).subscribe(competitors => {
      console.log(competitors);
    })
  }

  deleteCompetitor(competitorId: number) {
    this.http.delete<any[]>("http://localhost:8080/competitors?id=" + competitorId).subscribe(competitors => {
      this.competitors = competitors;
    })
  }


}
