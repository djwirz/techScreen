const chartingPullsByWeek = (weeks = 20) => {
  let pullPerWeek = {}
  let weeksForChart = []
  let pullsForChart = []

  //Indexing the pulls per week in an object
  pullRequests.forEach(pull => {
    let current = Math.floor(moment().diff(pull['closed_at'], 'week'))
    if (pullPerWeek[current]) {
      pullPerWeek[current] ++
    } else {
      pullPerWeek[current] = 1
    }
  })

  //Taking the index and turning it into two arrays for the chart
  //Inserting weeks that didn't have any pull requests and setting them to zero
  for (let i = 1; i <= weeks; i++) {
    if (pullPerWeek[i] === undefined) {
      pullPerWeek[i] = 0
    }
    weeksForChart.push(i)
    pullsForChart.push(pullPerWeek[i])
  }

  //returning an object to be accepted as the second argument for initializing a new chart
  return {
    type: 'line',
    data: {
      labels: weeksForChart,
      datasets: [{
        label: 'pulls',
        data: pullsForChart,
        backgroundColor: 'rgba(32,74,135,1.0)'
      }]
    }
  }
}

const ctx = document.getElementById('chart')

const makeNewChart = () => {
  let chartWeeksBack = document.getElementById('chartWeeksBack').value
  document.getElementById('currentChartWeeksBack').innerHTML = chartWeeksBack
  return new Chart(ctx, chartingPullsByWeek(chartWeeksBack))
}
