import { Component } from '@angular/core';
import { ZoomSlider } from "../zoom-slider/zoom-slider";
import { Grid } from "../grid/grid";

@Component({
  selector: 'app-vision4k',
  imports: [ZoomSlider, Grid],
  templateUrl: './vision4k.html',
  styleUrl: './vision4k.css',
})
export class Vision4k {

}
