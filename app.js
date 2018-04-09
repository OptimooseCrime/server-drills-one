const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/resolutions", (request, response) => {
    queries.list().then(resolution => {
        response.json({resolution});
    }).catch(console.error);
});

app.get("/resolutions/:id", (request, response) => {
    queries.read(request.params.id).then(resolution => {
        resolution
            ? response.json({resolution})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/resolutions", (request, response) => {
    console.log(request.body)
    queries.create(request.body, "resolution").then(resolution => {
        console.log(resolution, "2");
        response.status(201).json({resolution: resolution});
    }).catch(console.error);
});

app.delete("/resolutions/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/resolutions/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(resolution => {
        response.json({resolution: resolution[0]});
    }).catch(console.error);
});

app.use((request, response) => {
    response.sendStatus(404);
});

module.exports = app;

// const express = require("express");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");
// const app = express();
//
// const resolutions = require("./routes/resolutions");
//
// app.use(morgan('dev'));
// app.use(bodyParser.json());
//
// app.use("/resolutions", resolutions);
//
// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//     // const err = new Error("Not Found");
//     // err.status = 404;
//     // next(err);
// });
//
// // error handler
// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.json({
//       message: err.message,
//       error: req.app.get("env") === "development" ? err.stack : {}
//     });
// });
//
// module.exports = app;
