import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './removeIp.html';
import { Addresses } from '../../../api/addresses';

class RemoveIp {
  remove() {
    if (this.address) {
      Addresses.remove(this.address._id);
    }
  }
}

const name = 'removeIp';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
    address: '<'
  },
  controllerAs: name,
  controller: RemoveIp
});