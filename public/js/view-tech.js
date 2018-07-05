$(document).ready(function () {
    var cardContainer = $(".card-items")
    var queryURL = "http://localhost:8080/api/items";
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (res) {

            res.forEach(function (techItem) {
                var techQuery = techItem.category;
                if (techQuery==="Tech"){                
                var pictureIMG = $("<img>");
                pictureIMG.attr({ "src": techItem.picture });
                var allItems = techItem.item;
                var allDescriptions = techItem.description;
                var allCategories = techItem.category;
                var allImages = pictureIMG;
                var allUsersNames = techItem.User.name;
                var icon = `<a class="btn-floating halfway-fab waves-effect waves-light green" item-id=${techItem.id}><i class="material-icons ">swap_calls</i></a>`;

                cardContainer.append(
                    `<div class="col s12 m6 l4">` +
                    `<div class="card small">` +
                    `<div class="card-image">` +
                    `<img src='${techItem.picture}' alt='Item Picture'>` +
                    `<span class="card-title" style="width:100%; background: rgba(0, 0, 0, 0.5);">${allItems}</span>`+icon+
                    `</div>` +
                    `<div class="card-content ">` +
                    `<p>${allDescriptions}</p>` + `<p>Category: ${allCategories}<p>` + `<p>Posted by: ${allUsersNames}</p>` +
                    `</div>` +
                    `</div>` +
                    `</div>`);

                }
            });


        })


});