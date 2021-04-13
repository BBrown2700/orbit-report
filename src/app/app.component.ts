import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  constructor() {
    this.sourceList = [];
      let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
      // TODO: loop over satellites
      // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
      // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
      window.fetch(satellitesUrl).then(function(response) {
        response.json().then(function(data){
          let fetchedSatellites = data.satellites;
          //console.log(data)
          //console.log(data.satellites[3]);
          //fetchedSatellites.push('abc123')
          for (let i = 0; i < fetchedSatellites.length; i++) {
             //console.log(data.satellites[i].launchDate);
             let satellite = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
             //console.log(satellite[i])
             this.sourceList.push(satellite)
        }
        console.log(this.sourceList)
        }.bind(this));
        }.bind(this));
      }
    }



      // window.fetch(satellitesUrl).then(function(response) {
      //    response.json().then(function() {
      //      for (let i = 0; i <= response["satellites"].length; i++) {
      //       fetchedSatellites.push(response["satellites"][i]); 
      //       let satellite = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
      //       this.sourceList.push(satellite);
      //      }
      //    }.bind(this));
      // }.bind(this));

