var express = require('express');
var router = express.Router();

const {
    getFighters,
    getFighterId,
    addFighter,
    editFighter,
    removeFighter
} = require("../services/user.service");


const fs = require('fs');



/*GET all users*/
router.get('/', function (req, res, next) {
    const data = fs.readFileSync('./routes/fighters.json');
    let fighters = JSON.parse(data);
    let result = getFighters(fighters);

    res.send(result);
});

/*GET user id*/
router.get('/:id', function (req, res, next) {
    const data = fs.readFileSync('./routes/fighters.json');
    let fighters = JSON.parse(data);
    let fighter = getFighterId(fighters, req);

    if (fighter) {
        res.send(fighter)
    } else res.sendStatus(404);
});

/*POST add new user*/
router.post('/', (req, res, next) => {
    const data = fs.readFileSync('./routes/fighters.json');
    let fighters = JSON.parse(data);
    let newFighter = addFighter(fighters, req);

    if (newFighter) {
        res.send(newFighter);
        fs.writeFileSync('./routes/fighters.json', JSON.stringify(fighters))
    } else res.sendStatus(401);
});

/*PUT edit user*/
router.put("/:id", (req, res, next) => {
    const data = fs.readFileSync('./routes/fighters.json');
    let fighters = JSON.parse(data);
    let edit = editFighter(fighters, req);

    if (edit) {
        res.send(edit);
        fs.writeFileSync('./routes/fighters.json', JSON.stringify(fighters));
    } else res.sendStatus(400)
});


/*DELETE user*/
router.delete('/:id', (req, res, next) => {
    const data = fs.readFileSync('./routes/fighters.json');
    let fighters = JSON.parse(data);
    let result = removeFighter(fighters,req);
    if(result){
        fs.writeFileSync('./routes/fighters.json', JSON.stringify(result));
        res.sendStatus(200)
    }else res.sendStatus(404)
});



module.exports = router;
