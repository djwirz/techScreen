import _ from 'lodash'
import moment from 'moment'

const lodashPullBaseUrl = 'https://api.github.com/repos/lodash/lodash/pulls'

const pulls = ($http, $q) => {
  let allPulls = []

  const get = () => {
    if (allPulls.length > 0) {
      //this checks to see if the pulls already exist on state
      //expecting a promise so $q wraps the promiseless answer in a promise to avoid errors
      return $q.when(allPulls)
    }
    //otherwise need to make the initial request
    //slug is a horrendous way to use the front end to do my routing for individual requests
    //Only try at home, never in production
    return $http.get(`${lodashPullBaseUrl}?state=all`)
      .then(({data}) => {
        allPulls = data.map(pull => {
          pull.slug = pull.number
          return pull
        })
      })
  }

  const getOne = (query) => {
    const pull = {}
    pull.data = _.find(allPulls, {number: +query})
    if (pull.data) {
      //searches state for the particular query
      //just in case can make another query to the api for the particular pull request
      console.log('solved unnecessary request issue', pull)
      return $q.when(pull)
    } else {
      return $http.get(`${lodashPullBaseUrl}/${query}`)
        .then((data) => {
          return data
        })
    }
  }

  const avgPullPerWeek = (weeks, count = 0) => {
    let page = count + 1
    console.log('current page: ', page)

    $http.get(`${lodashPullBaseUrl}?state=all&per_page=100&page=${page}`)
      .then(function (pulls) {
        if (moment().diff(pulls[99]['closed_at'], 'week') < weeks) {
          count++
          return avgPullPerWeek(weeks, count)
        } else {
          let i = 98
          while (moment().diff(pulls[i]['closed_at'], 'week') < weeks) {
            i--
          }
          console.log(((count * 100) + i) / weeks)
          return ((count * 100) + i) / weeks
        }
      })
      .catch(function (err) {
        console.log(err.message)
      })
  }

  const customQuery = (state, number, direction, cb) => {
    return $http.get(`${lodashPullBaseUrl}?state=${state}&per_page=${number}&sort=${direction}`)
      .then(({data}) => {
        let customAnswer = data.map(pull => {
          return cb(pull)
        })
        return customAnswer
      })
  }

  const getState = () => {
    return allPulls
  }
  //this is awesome
  //keeps state in one place and allows it to be pulled into different parts of the app
  //state can still be altered, but not directly

  return {get, getOne, avgPullPerWeek, customQuery, getState}
}

pulls.$inject = ['$http', '$q']

export {pulls}

//coolest file in this project
