import { AnimationEntryMetadata } from '@angular/core';
import { query, animate, state, style, transition, trigger } from '@angular/animations';

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
      query('*', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.8s', style({ transform: 'translateX(0)' }))
      ])
    ]),
    transition(':leave', [
      query('div', [
        style({ opacity: 1 }),
        animate('1s', style({ opacity: 0}))
      ])
    ])
  ])