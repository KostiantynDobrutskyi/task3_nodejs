const {
    addData,
    editData,
    removeData
} = require("../repositories/user.repository");


const getFighters = (fighters) => {
    if (fighters) {
        return fighters
    } else return null


};

const getFighterId = (fighters, req) => {
    let fighter = fighters.find(fighter => {
        return fighter._id === req.params.id;
    });
    if (fighter) {
        return fighter
    } else return null

};

const addFighter = (fighters, req) => {
    let fighter = {
        _id: String(Date.now()),
        name: req.body.name || "Some name",
        health: req.body.health || 50,
        attack: req.body.attack || 5,
        defense: req.body.defense || 2,
        source: req.body.source || "https://loremflickr.com/320/240/dog"
    };
    if (fighters) {
        fighters.push(fighter);
        addData(fighter);
        return fighter
    } else return null;
};

const editFighter = (fighters, req) => {
    let fighter = fighters.find(fighter => {
        return fighter._id === req.params.id
    });
    if (fighter) {
        for (let key in fighter) {
            if (key !== "_id" && key !== "source") {
                fighter[key] = req.body[key] || fighter[key]
            }
        }
        editData(fighter);
        return fighter
    } else return null;
};

const removeFighter = (fighters, req) => {
    let fighter = fighters.find(fighter => {
        return fighter._id === req.params.id;
    });

    if (fighter) {
        removeData(fighter);

        return fighters.filter(fighter => {

            if (fighter._id === req.params.id) {
                return fighter._id !== req.params.id
            } else return fighter
        });
    } else return null
};


module.exports = {
    getFighters,
    getFighterId,
    addFighter,
    editFighter,
    removeFighter
};