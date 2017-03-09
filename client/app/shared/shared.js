import {pulls} from './pulls'
import angular from 'angular'

export const shared = angular.module('shared', [])
  .factory('Pulls', pulls)
