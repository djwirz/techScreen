import {queryDirective} from './query.directive'
import angular from 'angular'
import uiRouter from 'angular-ui-router'

export const query = angular.module('query', [uiRouter])
  .config(function ($stateProvider) {
    $stateProvider.state('query', {
      url: '/query',
      template: '<query></query>'
    })
  })
  .directive('query', queryDirective)
