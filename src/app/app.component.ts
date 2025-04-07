import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatSlideToggleModule,
    MatButton, CommonModule, RouterLink, RouterOutlet, MatToolbar, MatIcon, MatIconButton, MatMenuItem, MatMenu, MatMenuTrigger, MatDivider],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'kumnevoistlus-frontend';
}
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButton, MatIconButton} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import {MatDivider} from '@angular/material/divider';;

