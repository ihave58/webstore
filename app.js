(function() {
    "use strict";

    var express = require("express")
        , http = require("http")
        , path = require("path")
        , app = express()
        , routes;

    app.configure(function() {
        app.set("port", process.env.PORT || 3000);
        app.set("views", path.join(__dirname, "public"));
        app.use(express.static(path.join(__dirname, "public")));

        app.use(express.favicon());
        app.use(express.json());
        app.use(express.urlencoded());
        app.use(express.errorHandler());
        app.use(app.router);
    });
    routes = require("./routes")(app);

    app.get("/", routes.index);
    app.get("/index.html", routes.index);
    app.get("*", routes.http404);

    http.createServer(app).listen(app.get("port"), function() {
        console.log("Express server listening on port " + app.get("port"));
    });
})();