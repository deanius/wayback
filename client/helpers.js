// Template.registerHelper("theRun", theRun)
//
// Template.registerHelper("nextWaypoint", nextWaypoint)
// Template.registerHelper("currentSurplus", currentSurplus)

//2nd and 3rd arugments for reduce
addItUp = [
  (memo, num)=>(memo + num),
  0
]

theRun = _.extend(theRun(), {
  nextWaypoint() {
    return _.reduce(_.pluck(this.passedWaypoints(), "distance"), ...addItUp) + this.distancePerWaypoint()
  },
  currentSurplus() {
    return _.reduce(_.pluck(this.passedWaypoints(), "surplus"), ...addItUp)
  },
  passWaypoint() {
    this.passedWaypoints().push({
      distance: this.distancePerWaypoint(),
      surplus: 10
    })
  }
});

Template.home.viewmodel(theRun);
Template.running.viewmodel(theRun);
