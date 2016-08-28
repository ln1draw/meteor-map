import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { HTTP } from 'meteor/http'

import template from './addIp.html';
import { Addresses } from '../../../api/addresses';
import { name as Map } from '../map/map';

class AddIp {
  constructor() {
    this.address = {};
  }

  submit() {
    Meteor.http.get(this.buildUrl(), function (error, result) {
      if(error) {
        console.log(error);
      } else {
        var newAddress = {
          'ip': result.data.ip,
          'loc': result.data.loc,
          'city': result.data.city,
          'region': result.data.region,
          'country': result.data.country
        }
        Addresses.insert(newAddress);
        // map.getCoords(newAddress.loc);
      }
    });
    this.reset();
  }


  reset() {
    this.address = {};
  }

  buildUrl() {
    var url = 'http://ipinfo.io/json';
    if(this.address.ip) {
      url = 'http://ipinfo.io/' + this.address.ip + '/json';
    }

    return url;
  }
}

const name = 'addIp';

// create a module
export default angular.module(name, [
  angularMeteor,
  Map,
]).component(name, {
  template,
  controllerAs: name,
  controller: AddIp
});