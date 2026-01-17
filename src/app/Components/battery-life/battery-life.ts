import { Component } from '@angular/core';
import { BaseTextGlow } from "../base-text-glow/base-text-glow";
import { Grid } from "../grid/grid";

@Component({
  selector: 'app-battery-life',
  imports: [BaseTextGlow, Grid],
  templateUrl: './battery-life.html',
  styleUrl: './battery-life.css',
})
export class BatteryLife {

}
