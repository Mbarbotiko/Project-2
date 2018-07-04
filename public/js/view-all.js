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

                var selectedItems = []
                function emptyselectedItemsArr() {
                    selectedItems = [];
                }

                $(document.body).on('click', '.material-icons', function () {
                    selectedItems.push($(this).attr('id'));
                    // $($(this)).css({"background-color":"pink"})//just messing around with showing user that the item is selected, worry about this later after swap function is working.
                    var itemOne = selectedItems[0];
                    var itemTwo = selectedItems[1];
                    console.log("First item chosen ID: " + itemOne);
                    console.log("Second item chosen ID: " + itemTwo);

                    if (selectedItems.length == 2) {
                        var wasConfirmed = confirm("Press a button! OK SWAP CANCEL GO BACK AND PICK");
                        if (wasConfirmed) {
                            $.ajax({
                                url: "http://localhost:8080/api/swap",
                                method: 'POST',
                                data: {
                                    itemOne:itemOne,
                                    itemTwo:itemTwo
                                }
                                //put an auto refreshin here
                            }).then(console.log);
                        } else {
                            emptyselectedItemsArr();
                            console.log(selectedItems);
                            //also close modal here

                        }
                    }


                });




        })
});