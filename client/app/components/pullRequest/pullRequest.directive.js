import template from './pullRequest.html'
import {PullRequestController as controller} from './pullRequest.controller'

export const pullRequestDirective = () => {
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
