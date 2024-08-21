import express from "express";

import getDatabase from "./database.js";

import todosRouter from "./routes/todos.js";

const database = getDatabase();

const app = express();

app.use(express.json());
app.use("/api/todos", todosRouter);

app.listen(process.env.PORT, () => {

    console.log(`Server listening on port ${process.env.PORT}`);

});
