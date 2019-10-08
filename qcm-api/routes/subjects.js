var express = require('express');
var router = express.Router();

/* GET subjects. */
router.get('/', function (req, res, next) {
    const {db} = req.app.locals;
    db.collection('subjects').find().toArray((err, subjects) => res.json(subjects));
});

/* GET /subjects/:id */
router.get('/:id', function(req, res) {
    const { db } = req.app.locals;
    const { id } = req.params;
    db.collection('subjects').findOne({ _id: new ObjectID(id) }, (err, theme) => res.json(theme));
});
/* PUT /subjects/:id */


module.exports = router;

-