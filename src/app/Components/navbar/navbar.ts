import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  hoveredItem: string = ""
  exploreList: string[] = [];
  moreFromList: string[] = [];
  supportList: string[] = []
  isShown: boolean = false;
  toggleOffcanvas(toggleParam: {
    show: boolean;
    hovered?: string;
    exploreList?: string[];
    moreFromList?: string[];
    supportList?: string[]

  }) {
    this.hoveredItem = toggleParam.hovered || "";
    this.exploreList = toggleParam.exploreList || [];
    this.moreFromList = toggleParam.moreFromList || [];
    this.supportList = toggleParam.supportList || [];
    if (this.isShown !== toggleParam.show) {
      this.isShown = toggleParam.show;
    }
  }
  //#region data
  categories: {
    name: string,
    explore: string[],
    more: string[],
    support: string[]
  }[] = [
      {
        name: 'Mac',
        explore: [
          'Explore All Mac',
          'MacBook Air',
          'MacBook Pro',
          'iMac',
          'Mac Studio',
          'Mac Pro',
          'Displays'],
        more: ['Mac Support'],
        support: []
      },
      {
        name: 'iPad',
        explore: [
          'Explore All iPad',
          'iPad Pro',
          'iPad Air',
          'iPad',
          'iPad mini',
          'Apple Pencil',
          'Keyboards'],
        more: ['iPad Support'],
        support: []
      },
      {
        name: 'iPhone',
        explore: [
          'Explore All iPhone',
          'iPhone 16 Pro',
          'iPhone 16',
          'iPhone 16e',
          'iPhone 15'],
        more: ['iphone Support'],
        support: []
      },
      {
        name: 'Watch',
        explore: [
          'Explore All Watch',
          'Apple Watch Series 10',
          'Apple Watch SE',
          'Apple Watch Ultra 2',
          'Apple Watch Nike',
        ],
        more: [],
        support: []
      },
      {
        name: 'AirPods',
        explore: [
          'Explore All AirPods',
          'Air Pods 4',
          'Air Pods Pro 2',
          'Air Pods Max',],
        more: [
          'Hearing Health'],
        support: []
      },
      {
        name: 'TV & Home',
        explore: [
          'Explore TV & Home',
          'Apple TV 4K',],
        more: [
          'Apple TV Support',
          'Apple TV App',
          'Apple TV+',
          'Apple Home',
          'Apple Music',
          'AirPlay'],
        support: []
      },
      {
        name: 'Entertainment',
        explore: [
          'Explore Entertainment',
          'Apple one',
          'Apple TV+',
          'Apple Music',
          'Apple Arcade',
          'Apple Podcast',
          'Apple Book',
          'Apple Store',
        ],
        more: [],
        support: ["Apple TV+ Support", "Apple Music Support"]
      }, {
        name: 'Support',
        explore: [
          'Explore Support',
          'iPhone',
          'Mac',
          'IPad',
          'Music',
          'TV',
        ],
        more: [],
        support: []
      }, {
        name: 'Where to Buy',
        explore: [
          'Autherized Resellers',
          'Services & Support',
        ],
        more: [],
        support: []
      },
    ]

  //#endregion
}