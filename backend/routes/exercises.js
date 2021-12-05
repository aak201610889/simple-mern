const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.findById()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("ERROR" + err));
});
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration =Number (req.body.duration);
  const date =Date.parse(req.body.date);
  const NewExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });
  NewExercise.save()
    .then(() => res.json("NewExercise adding"))
    .catch((err) => res.status(400).json("ERROR" + err));
});
router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("ERROR" + err));
});


router.route(':/id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id).then(() => res.json('exercise deleted')).catch(err => res.status(400).json('Erorre'+err))
})
router.route('/update/:id').post((req, res) => {
  Exercise.findByIde(req.params.id).then(Exercise => {
    Exercise.username = req.body.username;
    Exercise.description = req.body.description;
    Exercise.duration = Number(req.body.duration);
    Exercise.date = Date.parse(req.body.date);
    Exercise.save()
      .then(() => res.json('Exercise update')).catch(err=>res.status(400).json('Error '+err ))
  }).catch(err => res.status(400).json('Erorre'+err))
})
module.exports = router;
