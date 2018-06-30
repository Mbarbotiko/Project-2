$(document).ready(function () {
    var cardContainer = $(".card-items")


    var queryURL = "http://localhost:8080/api/items";
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (res) {

            res.forEach(function (spouseItem) {
                var spouseQuery = spouseItem.category;
                if (spouseQuery==="Spouse"){                
                var pictureIMG = $("<img>");
                pictureIMG.attr({ "src": spouseItem.picture });
                var allItems = spouseItem.item;
                var allDescriptions = spouseItem.description;
                var allCategories = spouseItem.category;
                var allImages = pictureIMG;
                var allUsersNames = spouseItem.User.name;

                cardContainer.append(
                    `<div class="row card">` +
                    `<div class="col s12 m6 l4">` +
                    `<div class="card ">` +
                    `<div class="card-image">` +
                    `<img src='${spouseItem.picture}' alt='Item Picture'>` +
                    `<span class="card-title">${allItems}</span>` +
                    `<a class="btn-floating halfway-fab waves-effect waves-light green">` +
                    `<i class="material-icons ">swap_calls</i>` +
                    `</a>` +
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