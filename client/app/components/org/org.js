import {orgDirective} from './org.directive'
import angular from 'angular'
import uiRouter from 'angular-ui-router'

export const org = angular.module('org', [uiRouter])
  .config(function ($stateProvider) {
    $stateProvider.state('org', {
      url: '/org',
      template: '<org></org>'
    })
  })
  .directive('org', orgDirective)
