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
    });
    var userSelect = $("#user");
    
      // A function to get Authors and then render our list of Authors
    function getAuthors() {
        $.get("/api/users", renderAuthorList);
    }
    // Function to either render a list of authors, or if there are none, direct the user to the page
    // to create an author first
    function renderAuthorList(data) {
        if (!data.length) {
        window.location.href = "/NewUser.html";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createAuthorRow(data[i]));
    }
    authorSelect.empty();
    console.log(rowsToAdd);
    console.log(authorSelect);
    authorSelect.append(rowsToAdd);
    authorSelect.val(authorId);
  }

    // Creates the author options in the dropdown
    function createAuthorRow(author) {
        var listOption = $("<option>");
        listOption.attr("value", user.id);
        listOption.text(user.name);
        return listOption;
      }

});

