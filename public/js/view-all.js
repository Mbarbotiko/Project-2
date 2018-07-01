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
                    `<img src='${printEverything.picture}' alt='Item Picture'>` + `<span class="card-title">${allItems}</span>` +//add an  event listener here so in the loop it will listen for a click and gather item information to force into the array we will create. give each item an attribute by going through the response here and making the attribute the ID/Whatever is going to be swapped.  Then use the attribute to either push into array as selected item to swap OR pass as an arugment in a function to swap.
                    icon +
                    `</div>` +
                    `<div class="card-content ">` +
                    `<p>${allDescriptions}</p>` + `<p>Category: ${allCategories}<p>` + `<p>Posted by: ${allUsersNames}</p>` +
                    `</div>` +
                    `</div>` +
                    `</div>`);
            });


        })

    var clickCount = 0;
    $(document.body).on('click', '.material-icons', function () {
        clickCount++;

    });


    var firstSelectedItem = []
    function emptyFirstArray() {
        firstSelectedItem = [];
    }

    var secondSelectedItem = []
    function emptySecondArray() {
        secondSelectedItem = [];
    }

    // switch(expression) {
    //     case n:
    //         code block
    //         break;
    //     case n:
    //         code block
    //         break;
    //     default:
    //         code block
    // }


        $(document.body).on('click', '.material-icons', function () {
            if (clickCount == 1) {

                emptyFirstArray();
                firstSelectedItem.push($(this).attr('id'));
                // $($(this)).css({"background-color":"pink"})
                console.log("First Item ID is: " + firstSelectedItem);


            } else {

                emptySecondArray();
                secondSelectedItem.push($(this).attr('id'));
                // $($(this)).css({"background-color":"pink"})
                console.log("Second Item ID is: " + secondSelectedItem);
                //the item ID is being held in the 0 of the array.

                console.log("Items "+ firstSelectedItem+" AND "+secondSelectedItem+" will be swapped?");
            

            }
        
               
          
        });




    });
