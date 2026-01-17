import { Component, ElementRef, viewChild } from '@angular/core';
import { CameraControlSlider } from "../camera-control-slider/camera-control-slider";
import { BaseTextGlow } from "../base-text-glow/base-text-glow";
import { AutoPlay } from "../../Directives/auto-play";
import { VideoSrvice } from '../../services/video-srvice';
import { VisualIntelligence } from "../visual-intelligence/visual-intelligence";
import { Grid } from "../grid/grid";

@Component({
  selector: 'app-camera-control.',
  imports: [CameraControlSlider, BaseTextGlow, AutoPlay, VisualIntelligence, Grid],
  templateUrl: './camera-control.html',
  styleUrl: './camera-control.css',
})
export class CameraControl {
  videoRef = viewChild<ElementRef<HTMLVideoElement>>("videoRef")
  video: HTMLVideoElement | undefined
  icon = ""
  iconType: "Play" | "Pause" | "Restart" = "Pause"

  //#region lifecycle
  constructor(private videoSrvice: VideoSrvice) {
    this.icon = videoSrvice.icons.pauseIcon
  }
  ngAfterViewInit() {
    this.video = this.videoRef()?.nativeElement
  }
  //#endregion
  setIconType() {
    let icons = this.videoSrvice.icons
    switch (this.icon) {
      case icons.pauseIcon:
        this.iconType = "Pause"
        break;
      case icons.playIcon:
        this.iconType = "Play"
        break;
      case icons.restartIcon:
        this.iconType = "Restart"
        break;
      default:
        break;
    }
  }
  onToggle() {
    if (this.video)
      this.icon = this.videoSrvice.toggle(this.video)
    this.setIconType()
  }
  onPlay() {
    this.icon = this.videoSrvice.icons.pauseIcon
    this.setIconType()
  }
  onPause() {
    this.icon = this.videoSrvice.icons.playIcon
    this.setIconType()
  }
  onEnd() {
    this.icon = this.videoSrvice.icons.restartIcon
    this.setIconType()
  }
}
