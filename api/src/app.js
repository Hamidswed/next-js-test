const Express = require("express");
const cors = require("cors");
const app = Express();
app.use(Express.json());
app.use(cors());

let tasks = [];

app.post("/tasks", (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.json(tasks);
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.delete("/tasks/:name", (req, res) => {
  const { name } = req.params;
  tasks = tasks.filter((item) => item.name !== name);
  res.json(tasks);
});

app.put("/tasks/:name", (req, res) => {
  const { name } = req.params;
  const task = req.body;
  const index = tasks.findIndex((item) => item.name === name);
  tasks[index] = task;
  res.json(tasks);
});

const port = 8000;
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
