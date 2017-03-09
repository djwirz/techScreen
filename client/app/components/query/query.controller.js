class QueryController {
  constructor (Pulls) {
    this.message = 'Custom query time'
    this.Pulls = Pulls
  }
}

QueryController.$inject = ['Pulls']

export {QueryController}
