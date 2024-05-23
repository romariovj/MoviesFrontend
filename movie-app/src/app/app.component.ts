import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Route, Router, RouterOutlet } from '@angular/router';
import { Subscription, filter } from 'rxjs';

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movie-app';


}
