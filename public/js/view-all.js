$(document).ready(function () {
    var showAllContainer = $(".show-all");


var queryURL= "http://localhost:8080/api/users";
$.ajax({
    url: queryURL,
    method: 'GET'
})

.then(function(res){

    for ( var i = 0; i<res.length; i++){
        var usersName = $(showAllContainer).append("Name: "+
        res[i].name);
        console.log(res[i].name);


        var itemName = $(showAllContainer).append("Item: "+
        res[i].Items[0].item);
        console.log(res[i].Items[0].item);

        var itemDescription = $(showAllContainer).append("Description: "+
        res[i].Items[0].description);
        console.log(res[i].Items[0].description);

        var itemPicture = $("<img>");

        itemPicture.attr({"src":res[i].Items[0].picture});

        $(showAllContainer).append(itemPicture);
 


        var itemCategory = $(showAllContainer).append("Category: "+
        res[i].Items[0].category);
        console.log(res[i].Items[0].category);

    }
});


});