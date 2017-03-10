const weeksAgo = (weeks, count = 2) => {
  if (count >= 15) {
    console.log('remove throttle control if you wish to risk your request per minute this way')
    return
  }
  console.log('current page: ', count)

  fetch(`https://api.github.com/repos/lodash/lodash/pulls?state=all&per_page=100&page=${count}`)
      .then(blob => blob.json())
      .then(data => pullRequests.push(...data))
      .then(function () {
        if (moment().diff(pullRequests[pullRequests.length - 1]['closed_at'], 'week') < weeks) {
          count++
          return weeksAgo(weeks, count)
        } else {
          let i = pullRequests.length - 2
          while (moment().diff(pullRequests[i]['closed_at'], 'week') > weeks) {
            i--
          }
          console.log(i, weeks)
          let average = i / weeks
          console.log(average)
          document.getElementById('currentAverage').innerHTML = average
          return average
        }
      })
    .catch(function (err) {
      console.log(err.message)
    })
}

function avgPullPerWeek () {
  let weeksBack = document.getElementById('weeksBack').value
  document.getElementById('currentWeeksBack').innerHTML = weeksBack
  weeksAgo(weeksBack)
}
