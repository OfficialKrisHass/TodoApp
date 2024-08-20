import express from "express";

const PORT = 5000;
const app = express();

const todos = [
    { title: "Test 1", finished: false },
    { title: "Test 2", finished: true },
    { title: "Test 3", finished: false }
]

app.get("/api/todos", (req, res) => {

    res.status(200);
    res.json(todos);

})

app.listen(PORT, () => {

    console.log(`Server listening on port ${PORT}`);

});
