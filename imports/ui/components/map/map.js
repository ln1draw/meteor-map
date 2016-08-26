import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-simple-logger';
import 'angular-google-maps';

import './map.css';
import template from './map.html';

class Map {
  constructor($scope) {
    'ngInject';

    this.map = {
      center: {
        latitude: 40.385999999999996,
        longitude: -105
      },
      zoom: 4,
      events: {},
      markers: [
      {
        id: 'foo',
        coords: {
          latitude: 40.5,
          longitude: -102
        }
      }]
    };

  }

  // 37.3860,-122.0838
  getCoords(latlong) {
    var latlongArray = latlong.split(',');
    ret = {
      latitude: latlongArray[0],
      longitude: latlongArray[1]
    }
    console.log(ret);
    return ret;
  }
}

const name = 'map';

// create a module
export default angular.module(name, [
  angularMeteor,
  'nemLogging', // https://github.com/angular-ui/angular-google-maps/issues/1633
  'uiGmapgoogle-maps'
]).component(name, {
  template,
  controllerAs: name,
  bindings: {
    addresses: '='
  },
  controller: Map
});