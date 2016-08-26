import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './ipmap.html';
import { name as IpList } from '../ipList/ipList';
import { name as Map } from '../map/map';

class Ipmap {}

const name = 'ipmap';

// create a module
export default angular.module(name, [
  angularMeteor,
  IpList,
  Map
]).component(name, {
  template,
  controllerAs: name,
  controller: Ipmap
});