const weeksAgo = (weeks) => {
  //factored count out of the arguments
  //opens fetchHundredMore.js to be used by multiple similar functions
  //created a safety stop here
  let count = pullRequests.length / 100
  if (count >= 15) {
    console.log('remove throttle control if you wish to risk your request per minute this way')
    return
  }

  //Base case
  //Search optimizations are optional here, but unnecessary complication owing to the small size of the data being searched
  //example being how fast the search box regex runs
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

//initially factored out when recursing with the fetch inside the above function
//Kept this way because it allows html updates to be done separately instead of waiting for the calculation
const avgPullPerWeek = () => {
  let weeksBack = document.getElementById('weeksBack').value
  document.getElementById('currentWeeksBack').innerHTML = weeksBack
  weeksAgo(weeksBack)
}
