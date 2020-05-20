const db = require("../models");

module.exports = function (app) {
//updating a workout // 
  app.put("/api/workouts/:id", function (req, res) { 
    db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } }).then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
  // creating a workout // 
  app.post("/api/workouts/", function (req, res) {
    db.Workout.create({}).then(workouts => {
      res.json(workouts);
    })
      .catch(err => {
        res.json(err);
      });
  });

  // getting all the workouts //
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(workouts => {
      res.json(workouts);
    })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then(workouts => {
      res.json(workouts);
    })
      .catch(err => {
        res.json(err);
      });
  });

};