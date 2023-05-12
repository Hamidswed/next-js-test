
const Express = require("express");
const cors = require('cors')
const app = Express();
app.use(Express.json());
app.use(cors())

const tasks = [];

app.post("/tasks", (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.json(tasks);
});

app.get("/tasks", (req, res) => {
  res.json({ tasks });
});

const port = 8000;
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
