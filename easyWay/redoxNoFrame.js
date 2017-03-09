const rp = require('request-promise')
const moment = require('moment')

const weeksAgo = (weeks, count=0) => {
  let page = count + 1
  console.log('current page: ', page)

  let options = {
    uri: `https://api.github.com/repos/lodash/lodash/pulls?state=all&per_page=100&page=${page}`,
    headers: {
      'User-Agent': 'djwirz'
    },
    json: true
  }

  rp(options)
    .then(function (pulls) {
      if(moment().diff(pulls[99]['closed_at'], 'week') < weeks) {
        count++
        return weeksAgo(weeks, count)
      } else {
        let i = 98
        while(moment().diff(pulls[i]['closed_at'], 'week') < weeks){
          i--
        }
        console.log(((count*100) + i) / weeks)
        return ((count*100) + i) / weeks
      }
    })
    .catch(function (err) {
      console.log(err.message)
    })

}

weeksAgo(10)
