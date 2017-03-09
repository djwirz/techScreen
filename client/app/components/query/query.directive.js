import template from './query.html'
import {QueryController as controller} from './query.controller'

export const queryDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {},
    restrict: 'E',
    replace: true
  }
}
