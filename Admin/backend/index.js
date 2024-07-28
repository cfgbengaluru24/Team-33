const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const registerRouter = require("./controllers/register");
const loginRouter = require("./controllers/login");
const trainerRouter = require("./controllers/trainer");
const courseRouter = require("./controllers/course");
const campRouter = require("./controllers/camp");

app.use(cors());
app.use(express.json());
app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
app.use("/api/trainer", trainerRouter);
app.use("/api/add-course", courseRouter); // Ensure this matches the route in React component
app.use("/api/add-camp", campRouter);

app.get("/welcome", (request, response) => {
  console.log(process.env.SECRET);
  response.send("<h1>Hello</h1>");
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
