/*
  Units are hardcoded to miles for now
  Times are always dealt with in seconds
*/
ExampleRun = {
  unit: "miles",
  /* start screen fields */
  targetDistance: 10.0,
  numberOfWaypoints: 20,
  secondsPerWaypoint: 270,
  distancePerWaypoint: 0.5,
  startedAt: new Date(2015, 10, 10, 16, 0, 0),
  completedAt: null,
  /* running screen fields */
  passedWaypoints: [
    {distance: 0.5, intervalTime: 240, surplus: 30},
    {distance: 0.5, intervalTime: 290, surplus: 10}
  ],
  elapsedTime: 530
}

Runs = new Mongo.Collection(null);
Runs.remove({});
Runs.insert(ExampleRun)

theRun = () => Runs.findOne()
