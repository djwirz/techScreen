const weeksAgo = (weeks) => {
  let count = pullRequests.length / 100
  if (count >= 15) {
    console.log('remove throttle control if you wish to risk your request per minute this way')
    return
  }

  if (moment().diff(pullRequests[pullRequests.length - 1]['closed_at'], 'week') > weeks) {
    let i = pullRequests.length - 2
    
    while (moment().diff(pullRequests[i]['closed_at'], 'week') > weeks) {
      i--
    }

    let average = i / weeks

    document.getElementById('currentAverage').innerHTML = average
    return average
  } else {
    return fetchHundredMore(weeks, weeksAgo)
  }
}

const avgPullPerWeek = () => {
  let weeksBack = document.getElementById('weeksBack').value
  document.getElementById('currentWeeksBack').innerHTML = weeksBack
  weeksAgo(weeksBack)
}
