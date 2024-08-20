import express from "express";

const todosRouter = express.Router();

const todos = [
    { title: "Test 1", finished: false },
    { title: "Test 2", finished: true },
    { title: "Test 3", finished: false }
]

todosRouter.get("/", (req, res) => {

    res.status(200);
    res.json(todos);

});
todosRouter.post("/", (req, res) => {

    todos.push(req.body);
    res.json(req.body);

});

export default todosRouter;
