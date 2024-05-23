import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Route, Router, RouterOutlet } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movie-app';


}
