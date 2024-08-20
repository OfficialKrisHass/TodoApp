import express from "express";

import todosRouter from "./routes/todos.js";

const PORT = 5000;
const app = express();

app.use(express.json());

app.use("/api/todos", todosRouter);

app.listen(PORT, () => {

    console.log(`Server listening on port ${PORT}`);

});
