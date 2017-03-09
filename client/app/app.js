import {appDirective} from './app.directive'

import angular from 'angular'
import uiRouter from 'angular-ui-router'

import {home} from './components/home/home'
import {org} from './components/org/org'
import {common} from './components/common/common'
import {shared} from './shared/shared'
import {pullRequest} from './components/pullRequest/pullRequest'
import {query} from './components/query/query'
import {answer} from './components/answer/answer'

angular.module('app', [
  uiRouter,
  home.name,
  org.name,
  common.name,
  shared.name,
  pullRequest.name,
  answer.name,
  query.name
])
.directive('app', appDirective)
