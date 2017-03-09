class OrgController {
  constructor (Pulls) {
    this.message = 'The latest from lodash'
    this.Pulls = Pulls
    this.getPulls()

    this.search = ''
  }

  getPulls () {
    this.Pulls.get()
      .then(() => {
        this.pulls = this.Pulls.getState()
      })
  }
}

OrgController.$inject = ['Pulls']

export {OrgController}
