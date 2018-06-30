$(document).ready(function () {
    var cardContainer = $(".card-items")


    var queryURL = "http://localhost:8080/api/items";
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (res) {

            res.forEach(function (homeOfficeitem) {
                var homeOfficeQuery = homeOfficeitem.category;
                if (homeOfficeQuery==="Home Office"){                
                var pictureIMG = $("<img>");
                pictureIMG.attr({ "src": homeOfficeitem.picture });
                var allItems = homeOfficeitem.item;
                var allDescriptions = homeOfficeitem.description;
                var allCategories = homeOfficeitem.category;
                var allImages = pictureIMG;
                var allUsersNames = homeOfficeitem.User.name;

                cardContainer.append(
                    `<div class="row card">` +
                    `<div class="col s12 m6 l4">` +
                    `<div class="card ">` +
                    `<div class="card-image">` +
                    `<img src='${homeOfficeitem.picture}' alt='Item Picture'>` +
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