$(document).ready(function () {
    var cardContainer = $(".card-items")
    var queryURL = "http://localhost:8080/api/items";
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (res) {
            console.log(res);
            ;

            res.forEach(function (printEverything) {

                // $(showAllContainer).append(printEverything.item); (keeping these as an example how to append to a container. $(chosen container).append(use variable names below  allItems);

                var pictureIMG = $("<img>");
                pictureIMG.attr({ "src": printEverything.picture });
                var allItems = printEverything.item;
                var allDescriptions = printEverything.description;
                var allCategories = printEverything.category;
                var allImages = pictureIMG;
                var allUsersNames = printEverything.User.name;
                var icon = `<a class="btn-floating halfway-fab waves-effect waves-light green" item-id=${printEverything.id}><i class="material-icons ">swap_calls</i></a>`;

                cardContainer.append(
                    `<div class="col s12 m6 l4">` +
                    `<div class="card">` +
                    `<div class="card-image">` +
                    `<img src='${printEverything.picture}' alt='Item Picture'>` + `<span class="card-title">${allItems}</span>` +//add an  event listener here so in the loop it will listen for a click and gather item information to force into the array we will create. give each item an attribute by going through the response here and making the attribute the ID/Whatever is going to be swapped.  Then use the attribute to either push into array as selected item to swap OR pass as an arugment in a function to swap.
                    icon+
                    `</div>` +
                    `<div class="card-content ">` +
                    `<p>${allDescriptions}</p>` + `<p>Category: ${allCategories}<p>` + `<p>Posted by: ${allUsersNames}</p>` +
                    `</div>` +
                    `</div>` +
                    `</div>`);
            });


        })

        // $('.btn-floating halfway-fab waves-effect waves-light green').on(click, function(){
        
        // });


});