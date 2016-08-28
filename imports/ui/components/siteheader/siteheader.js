import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './siteheader.css';
import template from './siteheader.html';

class Siteheader {}

const name = 'siteheader';

// create a module
export default angular.module(name, [
  angularMeteor,
]).component(name, {
  template,
  controllerAs: name,
  controller: Siteheader
});