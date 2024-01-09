const express = require("express");
const app = express();
app.use(express.json());

const PORT = 8443;

app.get("/greet", (request, response) => {
  response.send("hello user how are you");
});

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
