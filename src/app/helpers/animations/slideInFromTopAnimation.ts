import { AnimationEntryMetadata } from '@angular/core';
import { query, animate, state, style, transition, trigger } from '@angular/animations';

// Component transition animations
export const slideInFromTopAnimation: AnimationEntryMetadata =
  trigger('slideInFromTopAnimation', [
    state('*',
      style({
        transform: 'translateY(0%)'
      })
    ),
    transition(':enter', [
      query('nav', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.25s ease-in', style({ transform: 'translateY(0%)' }))
      ])
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        transform: 'translateY(100%)'
      }))
    ])])