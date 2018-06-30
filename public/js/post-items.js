$( document ).ready(function() {
    var itemInput = $("#Item");
    var catInput = $("#Category");
    var desInput = $("#Description");
    var imageInput = $("#Image")
    var customerForm = $("#customerform");

    $(customerForm).on("submit", function(handleSubmit){
        handleSubmit.preventDefault();

        var newItem = {
            item: itemInput.val().trim(),
            description: desInput.val().trim(),
            picture: imageInput.val().trim(),
            category: catInput.val().trim()
        };

        $.post("/api/items", newItem)
        // On success, run the following code
        .then(function(data) {
          // Log the data we found
          console.log(data);
            // clear the fields upon input
            $("#Item").val("");
            $("#Description").val("");
            $("#Image").val("");   
        });


        if (!itemInput.val().trim() || !desInput.val().trim()) {
            return console.log("Don't stop til you get enough.");
        }
        console.log(newItem);
    })

});

