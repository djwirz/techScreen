const endpoint = 'https://api.github.com/repos/lodash/lodash/pulls?state=all&per_page=100&page=';

const pullRequests = [];

fetch(`${endpoint}1`)
  .then(blob => blob.json())
  .then(data => pullRequests.push(...data))

function findMatches(wordToMatch, pullRequests) {
  return pullRequests.filter(pull => {
    const regex = new RegExp(wordToMatch, 'gi');
    return pull.title.match(regex) || pull.created_at.match(regex)
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, pullRequests);
  const html = matchArray.map(pull => {
    const regex = new RegExp(this.value, 'gi');
    const titleName = pull.title.replace(regex, `<span class="hl">${this.value}</span>`);
    const openedDate = pull.created_at.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${titleName}, ${openedDate}</span>
        <span class="number">${numberWithCommas(pull.number)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
