$(document).ready(function () {
    var cardContainer = $(".flowRow");
    var queryURL = "http://localhost:8080/api/items";
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (res) {
            res.forEach(function (printEverything) {
                var pictureIMG = $("<img>");
                pictureIMG.attr({ "src": printEverything.picture });
                var allItems = printEverything.item;
                var allDescriptions = printEverything.description;
                var allCategories = printEverything.category;
                var allUsersNames = printEverything.User.name;
                var icon = `<a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons" id=${printEverything.id}>swap_calls</i></a>`
                cardContainer.append(
                    `<div class="col m4">` +
                    `<div class="card small">` +
                    `<div class="card-image">` +
                    `<img src='${printEverything.picture}' alt='Item Picture'>` +
                    `<span class="card-title" style="width:100%; background: rgba(0, 0, 0, 0.5);">${allItems}</span>` +
                    `<a class="btn-floating halfway-fab waves-effect waves-light green">` +
                    `<i class="material-icons">swap_calls</i>` +
                    `</a>` +
                    `</div>` +
                    `<div class="card-content">` +
                    `<p>${allDescriptions}</p>` + `<p>Category: ${allCategories}<p>` + `<p>Posted by: ${allUsersNames}</p>` +
                    `</div>` +
                    `</div>` +
                    `</div>`);
            });
        })
});