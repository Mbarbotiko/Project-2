$(document).ready(function () {

    var cardContainer = $(".card-items")
    var showUsersSelection = $(".card-smallSelection")
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

                if (selectedItems.length == 1) {
                    $('.modal').modal("open");
                    $.ajax({
                        url: "http://localhost:8080/api/items/" + itemOne,
                        method: 'GET'
                    })
                        .then(function (res) {
                            showUsersSelection.html(`<div class="col s12 m6 l4">` +
                                `<div class="card">` +
                                `<div class="card-image">` +
                                `<img src='${res.picture}' alt='Item Picture'>` + `<span class="card-title">${res.item}</span>` +
                                `</div>` +
                                `<div class="card-content ">` +
                                `<p>${res.description}</p>` + `<p>Category: ${res.category}<p>` + `<p>Posted by: ${res.User.name}</p>` +
                                `</div>` +
                                `</div>` +
                                `</div>`)

                        });

                    $(document.body).on('click', '#cancel-button', function () {
                        $('.modal').modal("close");
                        emptyselectedItemsArr();

                    })



                    var queryURL = "http://localhost:8080/api/users";
                    $.ajax({
                        url: queryURL,
                        method: 'GET'
                    }).then(function (data) {
                        renderUserList(data);
                    });

                    // A function to get users and then render our list of users
                    var userSelect = $("#user");

                    function renderUserList(data) {

                        var rowsToAdd = [];

                        var selectBox = $("#user");

                        for (var i = 0; i < data.length; i++) {
                            selectBox.append(createUserRow(data[i]));
                            // oncancel this needs to be cleared its appending over and over again to the list.

                            //   https://stackoverflow.com/questions/47824/how-do-you-remove-all-the-options-of-a-select-box-and-then-add-one-option-and-se

                        }
                    };

                    // Creates the user options in the dropdown
                    function createUserRow(user) {

                        var listOption = $("<option>");

                        listOption.attr("value", user.id);
                        listOption.text(user.name);
                        return listOption;

                    };

                    $('#user').on('change', function () {
                        var userSelectedItem = $(this).val();
                        console.log(userSelectedItem);
                        var showMyItems = $(".card-smallshowMyItems"); 

                        $.ajax({
                            url: "http://localhost:8080/api/users/" + userSelectedItem,
                            method: 'GET'
                        })
                        
                            .then(function (res) {
                                
                                console.log(res);
                                showUsersSelection.append(`<p>'${res}'</p>`+ `<p>LALALALALA</p>`);
                                // res.forEach(function (myItems) {
                                                    
                             
                                   
                                // });
                            });


                    });


                   





                    // if (wasConfirmed) {
                    //     $.ajax({
                    //         url: "http://localhost:8080/api/swap",
                    //         method: 'POST',
                    //         data: {
                    //             itemOne:itemOne,
                    //             itemTwo:itemTwo
                    //         }
                    //         //put an auto refreshin here
                    //     }).then(console.log);
                    // } else {
                    //     emptyselectedItemsArr();
                    //     console.log(selectedItems);
                    //     //also close modal here

                    // }
                }
                 


            });
            





        })

});