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

//should be getting the logic together to make a custom query, but once I found out I would be using my other implementation this was cast aside
