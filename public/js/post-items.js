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
            category: catInput.val().trim(),
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
    });

    //Selecting the user in the drop down for item posting.

    var queryURL = "http://localhost:8080/api/users";
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(data){
        console.log(data)
    });
    
      // A function to get users and then render our list of users
    var userSelect = $("#user");

    function getUser(res, req) {
        $.get("/api/users", renderUserList);
        userId = data.id;
    }

    function renderUserList(data) {
        
        var rowsToAdd = [];

        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createUserRow(data[i]));
        }
      };

    // Creates the user options in the dropdown
    function createUserRow(user) {
        
        var listOption = $("<option>");

        listOption.attr("value", user.id);
        listOption.text(user.name);
        return listOption;
      };

});

