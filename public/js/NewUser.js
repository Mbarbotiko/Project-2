$( document ).ready(function() {
    var nameInput = $("#name");
    var phoneInput = $("#phone");
    var customerForm = $("#customerform");

    $(customerForm).on("submit", function(handleSubmit){
        handleSubmit.preventDefault();

        var newUser = {
            name: nameInput.val().trim(),
            phone: phoneInput.val().trim(),
        };

        $.post("/api/users", newUser)
        // On success, run the following code
        .then(function(data) {
          // Log the data we found
          console.log(data);
        // clear the fields upon input
        $("#name").val("");
        $("#phone").val("");
        });


        if (!nameInput.val().trim() || !phoneInput.val().trim()) {
            return console.log("Don't stop til you get enough.");
        }
        console.log(newUser);
    })
});
