import template from './org.html'
import {OrgController as controller} from './org.controller'

export const orgDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {},
    restrict: 'E',
    replace: true
  }
}
