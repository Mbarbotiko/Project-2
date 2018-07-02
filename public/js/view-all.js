$(document).ready(function () {
    var cardContainer = $(".card-items")
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
                var allImages = pictureIMG;
                var allUsersNames = printEverything.User.name;
                var icon = `<a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons" id=${printEverything.id}>swap_calls</i></a>`
                cardContainer.append(
                    `<div class="col s12 m6 l4">` +
                    `<div class="card">` +
                    `<div class="card-image">` +
                    `<img src='${printEverything.picture}' alt='Item Picture'>` + `<span class="card-title">${allItems}</span>` + icon +
                    `</div>` +
                    `<div class="card-content ">` +
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
                    confirm("Press a button! OK SWAP CANCEL GO BACK AND PICK");
                    if (confirm == true) {
                        // update fruit a
                        // inner join fruit b on a.id <> b.id
                        // set a.color = b.color,
                        //     a.name = b.name,
                        //     a.calories = b.calories
                        // where a.id in (2, 5) and b.id in (2, 5)


                        //code here to handle swap in SQL
                        //Option A use a function/AJAX
                        //Option B use a sequelize function to delete from DB
                        //Option A:
                        // function deletePost(itemOne) {
                        //     $.ajax({
                        //       method: "DELETE",
                        //       url: "/api/items/?id="+itemOne
                        //     })
                        //       .then(function() {
                        //         getPosts(printEverything);
                        //         console.log(printEverything);
                        //       });
                        //   }

                        //   deletePost();
                        //Option B:

                        // // To update several rows at once:

                        // Task.bulkCreate([
                        //     { subject: 'programming', status: 'executing' },
                        //     { subject: 'reading', status: 'executing' },
                        //     { subject: 'programming', status: 'finished' }
                        // ]).then(() => {
                        //     return Task.update(
                        //         { status: 'inactive' }, /* set attributes' value */
                        //         { where: { subject: 'programming' } } /* where criteria */
                        //     );
                        // }).spread((affectedCount, affectedRows) => {
                        //     // .update returns two values in an array, therefore we use .spread
                        //     // Notice that affectedRows will only be defined in dialects which support returning: true

                        //     // affectedCount will be 2
                        //     return Task.findAll();
                        // }).then(tasks => {
                        //     console.log(tasks) // the 'programming' tasks will both have a status of 'inactive'
                        // })


                    } else {
                        emptyselectedItemsArr();
                        console.log(selectedItems);

                    }
                }


            });


        })

});