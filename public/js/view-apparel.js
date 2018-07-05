$(document).ready(function () {
    var cardContainer = $(".card-items")
    var queryURL = "http://localhost:8080/api/items";
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (res) {

            res.forEach(function (apparelitem) {
                var apparelQuery = apparelitem.category;
                if (apparelQuery==="Apparel"){                
                var pictureIMG = $("<img>");
                pictureIMG.attr({ "src": apparelitem.picture });
                var allItems = apparelitem.item;
                var allDescriptions = apparelitem.description;
                var allCategories = apparelitem.category;
                var allImages = pictureIMG;
                var allUsersNames = apparelitem.User.name;
                var icon = `<a class="btn-floating halfway-fab waves-effect waves-light green" item-id=${apparelitem.id}><i class="material-icons ">swap_calls</i></a>`;

                cardContainer.append(
                    `<div class="col m4">` +
                    `<div class="card small">` +
                    `<div class="card-image">` +
                    `<img src='${apparelitem.picture}' alt='Item Picture'>` +
                    `<span class="card-title" style="width:100%; background: rgba(0, 0, 0, 0.5);">${allItems}</span>` +icon+
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