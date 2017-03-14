import {pullRequestDirective} from './pullRequest.directive'
import angular from 'angular'
import uiRouter from 'angular-ui-router'

export const pullRequest = angular.module('pullRequest', [uiRouter])
  .config(function ($stateProvider) {
    $stateProvider.state('pullRequest', {
      url: '/org/:number',
      template: '<pull-request pull="pull"></pull-request>',
      controller: function ($scope, pull) {
        $scope.pull = pull
      },

      resolve: {
        pull: function (Pulls, $stateParams) {
          let {number} = $stateParams
          console.log($stateParams)
          return Pulls.getOne(number)
        }
      }
    })
  })
  .directive('pullRequest', pullRequestDirective)

//this use of the router is normal at the moment, spoiler alert this leads to things on the front end that shouldn't be done
