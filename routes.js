(function() {
    "use strict";

    module.exports = function(app) {
        var DIR_VIEW = app.get("views");

        return {
            index: function(req, res) {
                res.sendfile("index.html", {
                    root: DIR_VIEW
                });
            },
            http404: function(req, res){
                res.sendfile("404.html", {
                    root: DIR_VIEW
                });
            }
        }
    };
})();