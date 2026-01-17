import { Component } from '@angular/core';
import { Button } from "../button/button";
import { StickyFooterService } from '../../services/sticky-footer-service';

@Component({
  selector: 'app-sticky-footer',
  imports: [Button],
  templateUrl: './sticky-footer.html',
  styleUrl: './sticky-footer.css',
})
export class StickyFooter {
constructor(public stickyFooterService:StickyFooterService){
  
}
}
