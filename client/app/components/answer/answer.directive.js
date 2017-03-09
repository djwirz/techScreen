import template from './answer.html'
import {AnswerController as controller} from './answer.controller'

export const answerDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {
      pull: '='
    },
    bindToController: true,
    restrict: 'E',
    replace: true
  }
}
