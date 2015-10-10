/*
  Units are hardcoded to miles for now
  Times are always dealt with in seconds
*/
ExampleRun = {
  unit: "miles",
  /* start screen fields */
  targetDistance: 10.0,
  numberWaypoints: 20,
  targetPace: {
    secondsPerWaypoint: 270
  },
  /* running screen fields */
  passedWaypoints: [
    {distance: 0.5, intervalTime: 240, surplus: 30}
    {distance: 0.5, intervalTime: 290, surplus: 10}
  ],
  elapsedTime: 530,
  currentSurplus: 40
}
