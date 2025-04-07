import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatButton, MatIconButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-result',
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatFormField,
    MatButton,
    RouterLink,
    MatSelect,
    MatOption,
    MatIconButton,
    MatIcon,
    MatTooltip,
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit{

  competitorId!: number;
  eventName!: string;
  result!: number;
  results: any[] = [];
  events: string[] = ['100m run', 'Long jump', 'Shot put', 'High jump', '400m run','110m hurdles', 'Discus throw','Pole vault', 'Javelin throw','1500m run'];

  constructor(private http: HttpClient) {
  }

  buildResult(): Object {
    return {
      "competitorId": this.competitorId,
      "eventName": this.eventName,
      "result": this.result,
    };
  }

  ngOnInit() {
    this.http.get<any[]>("http://localhost:8080/results").subscribe(results => {
      this.results = results;
    })
  }

  submitResult() {
    this.http.post<any[]>('http://localhost:8080/results', this.buildResult()).subscribe(response => {
      console.log(response);
    })
  }

  deleteResult(id: number) {
    this.http.delete<any[]>("http://localhost:8080/results?id=" + id).subscribe(results => {
      this.results = results;
    })
  }
}
