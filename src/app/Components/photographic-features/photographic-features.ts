import { Component, ElementRef, viewChild } from '@angular/core';
import { Animation } from "../../Directives/animation";

@Component({
  selector: 'app-photographic-features',
  imports: [Animation],
  templateUrl: './photographic-features.html',
  styleUrl: './photographic-features.css',
})
export class PhotographicFeatures {
  p1=viewChild<ElementRef<HTMLElement>>("p1");
  p2=viewChild<ElementRef<HTMLElement>>("p2");
  p3=viewChild<ElementRef<HTMLElement>>("p3");
  
}
