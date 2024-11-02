const express = require(‘express’);

const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", port);
  });

  app.get(“/status”, ());

  app.get(“/status”, (request, response));

  app.get(“/status”, (request, response) => {
    const status = {
       “Status”: “Running”
    };
    
    response.send(status);  //function that takes the JSON object as the argument
 });