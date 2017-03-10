const fetchHundredMore = (arg, cb) => {
  let count = (pullRequests.length / 100) + 1

  console.log('Adding 100 pulls to pull requests array')

  fetch(`https://api.github.com/repos/lodash/lodash/pulls?state=all&per_page=100&page=${count}`)
    .then(blob => blob.json())
    .then(data => pullRequests.push(...data))
    .then(() => cb(arg))
    .then(() => console.log(`Pull requests array now contains ${pullRequests.length} pull requests`))
    .catch(err => console.log(err))
}
