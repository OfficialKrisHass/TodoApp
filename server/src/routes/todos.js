import express from "express";

const todosRouter = express.Router();

const todos = [];

todosRouter.get("/", (req, res) => {

    res.status(200);
    res.json(todos);

});
todosRouter.post("/", (req, res) => {

    const id = todos.length;
    todos.push({
        ...req.body,
        id: id 
    });

    res.json(todos[id]);

});

todosRouter.post("/:id", (req, res) => {
    
    const id = req.params.id;
    todos[id] = req.body;

    res.json(todos[id]);

});

export default todosRouter;
