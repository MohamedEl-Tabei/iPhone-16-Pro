import { Component, input } from '@angular/core';
import { Animation } from '../../Directives/animation';

@Component({
  selector: 'app-base-text-glow',
  imports: [Animation],
  templateUrl: './base-text-glow.html',
  styleUrl: './base-text-glow.css',
})
export class BaseTextGlow {
  glowPosition = input<'top' | 'bottom' | 'center'>('center');
  topText = input<string>('');
  centerText = input<string>('');
  bottomText = input<string>('');
  isFlex = input<boolean>(false);
}
