import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  width=input<string>("")
  height=input<string>("")
  bg=input<undefined|"blur">()
  disabled=input<boolean|undefined>(false)
  size=input<"lg"|"sm">("lg")
}
