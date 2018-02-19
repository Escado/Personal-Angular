import { AnimationEntryMetadata } from '@angular/core';
import { query, animate, state, style, transition, trigger, stagger } from '@angular/animations';

// Component transition animations
export const slideInFromLeftAnimation: AnimationEntryMetadata =
  trigger('slideInFromLeftAnimation', [
    state('*',
      style({
        position: 'inherit',
        width: '100%',
        transform: 'translateX(0%)'
      })
    ),
    transition(':enter', [
      query('div', [
        style({ transform: 'translateX(-100%)' }),
        stagger(10, animate('0.3s', style({ transform: 'translateX(0)' })))
      ])
    ])
  ])