(function() {
    "use strict";

    var Controllers = WebStore.Controllers,
        HomePageController;

    HomePageController = function(oThis) {
        oThis.products = [
            {
                name: "ABC",
                price: 100,
                currency: "Rs",
                color: "Red"
            },
            {
                name: "XYZ",
                price: 110,
                currency: "Rs",
                color: "Black"
            },
            {
                name: "MNP",
                price: 120,
                currency: "Rs",
                color: "Red"
            },
            {
                name: "PQR",
                price: 130,
                currency: "Rs",
                color: "Black"
            }
        ]
    };

    Controllers.HomePageController = HomePageController;
})();