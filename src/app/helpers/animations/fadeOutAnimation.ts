import { query, animate, state, style, transition, trigger, stagger } from '@angular/animations';
import { } from '@angular/core/src/render3/instructions';

// Component transition animations
export const fadeOutAnimation =
  trigger('fadeOutAnimation', [
    state('*', style({
      opacity: 1,
    })),
    transition(':enter', [
      query('div', [
        style({ opacity: 0 }),
        stagger(75, animate(500, style({ opacity: 1 })))
      ]),
    ])
  ])