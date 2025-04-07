import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-admin',
  imports: [
    RouterLink,
    MatButton
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
