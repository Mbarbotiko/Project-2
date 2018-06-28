$(document).ready(function () {
    var showAllContainer = $(".show-all");


    var queryURL = "http://localhost:8080/api/items";
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (res) {

            res.forEach(function (printEverything) {
                
                // $(showAllContainer).append(printEverything.item); (keeping these as an example how to append to a container. $(chosen container).append(use variable names below  allItems);

                var pictureIMG = $("<img>");
                pictureIMG.attr({ "src": printEverything.picture});
                var allItems = printEverything.item;
                var allDescriptions = printEverything.description;
                var allCategories = printEverything.category;
                var allImages = pictureIMG;
                var allUsersNames = printEverything.User.name;

                // $(showAllContainer).append(allItems);EXAMPLE WILL PRINT ITEM NAMES TO THIS CONTAINER.
            });


        })


});