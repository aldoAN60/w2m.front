import { Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('hoverAnimation', [
      state('hovered', style({ transform: 'rotateY(10deg)' })),
      transition('* => hovered', animate('0.5s')),
    ]),
  ],
})
export class AppComponent{
  
  title = 'w2m.front';
  integrantes = [
    { imageUrl: 'assets/img/criss-martell.jpg', nombre: 'Christian' },
    { imageUrl: 'assets/img/fedelobo.jpg', nombre: 'Fedelobo' },
    { imageUrl: 'assets/img/werevertumorro.png', nombre: 'Werevertumorro' },
    { imageUrl: 'assets/img/wereverwero.jpg', nombre: 'Wereverwero' },
    { imageUrl: 'assets/img/israel.jpeg', nombre: 'israel' },
    { imageUrl: 'assets/img/felix.jpeg', nombre: 'felix' },
    // ... más elementos
  ];

}
