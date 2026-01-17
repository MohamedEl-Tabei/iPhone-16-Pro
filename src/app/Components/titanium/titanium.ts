import { Component } from '@angular/core';
import { BaseTextGlow } from "../base-text-glow/base-text-glow";
import { TitaniumSlider } from "../titanium-slider/titanium-slider";
import { Grid } from "../grid/grid";

@Component({
  selector: 'app-titanium',
  imports: [BaseTextGlow, TitaniumSlider, Grid],
  templateUrl: './titanium.html',
  styleUrl: './titanium.css',
})
export class Titanium {
  
}
