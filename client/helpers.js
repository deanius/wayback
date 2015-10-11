// Template.registerHelper("theRun", theRun)
//
// Template.registerHelper("nextWaypoint", nextWaypoint)
// Template.registerHelper("currentSurplus", currentSurplus)

//2nd and 3rd arugments for reduce
addItUp = [
  (memo, num)=>(memo + num),
  0
]

var surplus = 10;
getNextSurplus = () => (surplus -= 15)

theRun = new ViewModel(_.extend(theRun(), {
  nextWaypoint() {
    return _.reduce(_.pluck(this.passedWaypoints(), "distance"), ...addItUp) + this.distancePerWaypoint()
  },
  currentSurplus() {
    return _.reduce(_.pluck(this.passedWaypoints(), "surplus"), ...addItUp)
  },
  surplusHistory() {
    var surplus=0
    return this.passedWaypoints().map(waypoint => ({
      elapsedDistance: waypoint.elapsedDistance,
      surplus: waypoint.surplus,
      cumulativeSurplus: (surplus += waypoint.surplus)
    }));
  },
  passWaypoint() {
    this.passedWaypoints().push({
      elapsedDistance: this.nextWaypoint(),
      distance: this.distancePerWaypoint(),
      surplus: getNextSurplus()
    })
  },
  passWaypointAsync() {
    for(let msec of [1000, 2000]){
      setTimeout(() => this.passWaypoint(), msec)
    }
  }
}));

wayPointPassed = Tracker.autorun(() => {
  new Audio(getClip('clips/whistle.mp4')).play()
  console.log(theRun.passedWaypoints().list().length, " waypoints of beer on the wall")
})

Template.home.viewmodel(theRun);
Template.running.viewmodel(theRun);
