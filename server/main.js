import { Meteor } from 'meteor/meteor';
import { Addresses } from '../imports/api/addresses';


Meteor.startup(() => {
  if (Addresses.find().count() === 0) {
    const addresses = [{
      'ip': '8.8.8.8',
      'loc': '37.385999999999996,-122.0838',
      'city': 'Mountain View',
      'region': 'California',
      'country': 'US'
    }];

    addresses.forEach((address) => {
      Addresses.insert(address);
    });
  }
});