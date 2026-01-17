import { Component  } from '@angular/core';
import { BaseTextGlow } from "../base-text-glow/base-text-glow";
import { PhotographicFeatures } from "../photographic-features/photographic-features";
import { PhotographicFilter } from "../photographic-filter/photographic-filter";
import { Grid } from "../grid/grid";

@Component({
  selector: 'app-photographic-style',
  imports: [BaseTextGlow, PhotographicFeatures, PhotographicFilter, Grid],
  templateUrl: './photographic-style.html',
  styleUrl: './photographic-style.css',
})
export class PhotographicStyle {
ngAfterViewInit(){

}
}
