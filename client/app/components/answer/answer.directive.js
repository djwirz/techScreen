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

//getting the template and controller
//controller as vm stands for vm from https://johnpapa.net/angularjss-controller-as-and-the-vm-variable/
//want access to pulls
//bind to controller does exactly that, binds to the controller rather thatn $scope
//E means element name only 
//replace being true makes for less of a nested name look on the dom
