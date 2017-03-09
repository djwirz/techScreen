import {answerDirective} from './answer.directive'
import angular from 'angular'
import uiRouter from 'angular-ui-router'

export const answer = angular.module('answer', [uiRouter])
  .config(function ($stateProvider) {
    $stateProvider.state('answer', {
      url: '/answer',
      template: '<answer answer="answer"></answer>',
      controller: function ($scope, query) {
        $scope.query = query
      },

      resolve: {
        query: function (Pulls, $stateParams) {
          let {state, number, direction, cb} = answer
          return Pulls.customQuery(state, number, direction, cb)
        }
      }
    })
  })
  .directive('answer', answerDirective)
