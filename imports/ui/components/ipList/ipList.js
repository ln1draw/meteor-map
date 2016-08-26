import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Addresses } from '../../../api/addresses';
import { name as AddIp } from '../addIp/addIp';
import { name as RemoveIp } from '../removeIp/removeIp';
import template from './ipList.html';

class IpList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      addresses() {
        return Addresses.find({});
      }
    });
  }
}

const name = 'ipList';

// create a module
export default angular.module(name, [
  angularMeteor,
  AddIp,
  RemoveIp
]).component(name, {
  template,
  controllerAs: name,
  controller: IpList
});