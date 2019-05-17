const router = require('express').Router();

const db = require('../games/games-model');

router.get('/', (req,res) => {
    db
        .find()
        .then(db => {
         res.status(200).json(db);
        })
        .catch(err => {
            res.status(500).json({ error: "The games could not be retrieved." });
        })
});


router.post('/', (req, res) => {
    const { title, genre } = req.body;
    if (!title || !genre) {
      res.status(422).json({ error: 'Please Provide: Id, Title, and Genre'});
    } else {
      res.status(201).json(req.body);
    }
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    db
    .findById(id)
    .then(game => {
        if(game.length === 0) {
            res.status(404).json({ message: "This game does not exist." });
        } else {
            res.status(200).json(game);
        }
    })
    .catch(err => {
        res.status(500).json({ error: "This game could not be retrieved." })
    });
});

module.exports = router;