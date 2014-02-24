(function() {
    "use strict";

    var sportShop;
    window.WebStore = window["WebStore"] || {
        modules: {},
        Controllers: {},
        Views: {}
    };

    WebStore.modules.sportShop = angular.module("sportShop", [])
        .config(function(routeProvider) {
            routeProvider
                .when("/", {
                    controller: "HomePageController",
                    templateUrl: "HomePageView.html"
                })
                .when("/product", {
                    controller: "ProductPageController",
                    templateUrl: "ProductPageView.html"
                })
                .otherwise({ redirectTo: "/" });
        });
})();