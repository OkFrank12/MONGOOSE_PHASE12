const express = require("express");

const port = 1234;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  try {
    return res.status(200).json({
      message: "Api is ready for consumption",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("Server is listening...", port);
});
