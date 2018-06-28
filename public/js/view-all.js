$(document).ready(function () {

    var showAllContainer = $(".show-all");

    var queryURL = "http://localhost:8080/api/users";

    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (res) {

            // for loop to get response for name, item, description, picture
            // and category
            for (var i = 0; i < res.length; i++) {
                // variable for name response
                var usersName = res[i].name;
                // variable for item response
                var itemName = res[i].Items[0].item;
                // variable for description response
                var itemDescription = res[i].Items[0].description;
                // variable for picture response
                var itemPicture = res[i].Items[0].picture;
                // variable for category response
                var itemCategory = res[i].Items[0].category;

                // inserts html elements to class show-all
                showAllContainer.append(
                    '<div class="row">' +
                    '<div class="col s12 m6">' +
                    '<div class="card blue-grey darken-1">' +
                    '<div class="card-content white-text">' +
                    `<span class="card-title">${itemName}</span>` +
                    `<p id="viewAllDesc"> Description: ${itemDescription} </p>` +
                    `<img src='${itemPicture}' alt='Item Picture'>` +
                    `<p id="viewAllName"> User: ${usersName} </p>` +
                    `<p id="viewAllCategory"> Category: ${itemCategory} </p>`
                )
                console.log(itemPicture);
            }
        });
});