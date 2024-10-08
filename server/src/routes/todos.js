import express from "express";

import getDatabase from "../database.js";

const todosRouter = express.Router();

const database = getDatabase();

todosRouter.get("/", (req, res) => {

    function respond(todos) {

        res.status(200);
        res.json(todos);

    }

    database.runQuery("SELECT * FROM todos").then(res => respond(res));


});
todosRouter.post("/", (req, res) => {

    function respond(queryRes) {

        if (queryRes.length === 0) throw new Error("Couldn't get newly added todo from database");

        res.status(200);
        res.json(queryRes[0]);

    }

    database.runQuery(`INSERT INTO todos(title) VALUES (?)`, [req.body.title])
    .then(res => database.runQuery(`SELECT * FROM todos WHERE id=${res.insertId}`))
    .then(res => respond(res))
    .catch(error => console.error(error));

});

todosRouter.delete("/:id", (req, res) => {

    function respond(status, msg) {

        res.statusCode = status;
        res.json({ message: msg });

    }

    database.runQuery(`DELETE FROM todos WHERE id=?`, [req.params.id])
    .then(() => respond(200, "Success"))
    .catch(error => {

        console.error(error);
        respond(500, error);

    });

});

todosRouter.post("/finish/:id", (req, res) => {

    function respond(status, msg) {

        res.statusCode = status;
        res.json({ message: msg });

    }

    database.runQuery(`UPDATE todos SET finished=? WHERE id=?`, [req.body.finished, req.body.id])
    .then(res => respond(200, "Success"))
    .catch(error => {

        console.error(error);
        respond(500, error);

    });
    
});

export default todosRouter;
