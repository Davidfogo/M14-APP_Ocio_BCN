import { Component } from '@angular/core';

import * as Leaflet from 'leaflet';

import { antPath } from 'leaflet-ant-path';

// https://edupala.com/how-to-add-leaflet-map-in-ionic/ para saber como poner el MAPA
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  map: Leaflet.Map;

  constructor() {}

  ngOnInit() { }
  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    this.map = Leaflet.map('mapId').setView([41.416282, 2.198960], 13);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);

    // Leaflet.marker([28.6, 77]).addTo(this.map);
    // Leaflet.marker([34, 77]).addTo(this.map);
    // var marker = Leaflet.marker([51.5, -0.09]).addTo(this.map);
    antPath([[28.644800, 77.216721], [34.1526, 77.5771]],
      { color: '#FF0000', weight: 5, opacity: 0.6 })
      .addTo(this.map);
  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map.remove();
  }
}
