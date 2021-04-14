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
  displayList: Satellite[];
  constructor() {
    this.displayList = [];
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
        //console.log(this.sourceList)
        this.displayList = this.sourceList.slice(0);
      }.bind(this));
    }.bind(this));
  }
      search(searchTerm: string): void {
        let matchingSatellites: Satellite[] = [];
        searchTerm = searchTerm.toLowerCase();
        for(let i=0; i < this.sourceList.length; i++) {
           let name = this.sourceList[i].name.toLowerCase();
           if (name.indexOf(searchTerm) >= 0) {
              matchingSatellites.push(this.sourceList[i]);
           }
        }
        // assign this.displayList to be the array of matching satellites
        // this will cause Angular to re-make the table, but now only containing matches
        this.displayList = matchingSatellites;
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

