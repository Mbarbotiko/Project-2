$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var nameInput = $("#Item-name");
  var itemList = $("body");
  var itemContainer = $(".");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#", handleItemFormSubmit);
  $(document).on("click", ".delete-item", handleDeleteButtonPress);

   // Getting the initial list of Authors
   getAuthors();

   // A function to handle what happens when the form is submitted to create a new Author
   function handleItemFormSubmit(event) {
     event.preventDefault();
     // Don't do anything if the name fields hasn't been filled out
     if (!nameInput.val().trim().trim()) {
       return;
     }
     // Calling the upsertAuthor function and passing in the value of the name input
     upsertItem({
       name: nameInput
         .val()
         .trim()
     });
   }
 
   // A function for creating an author. Calls getItem upon completion
   function upsertItem(itemData) {
     $.post("/api/post", itemData)
       .then(getItem);
   }
 
   // Function for creating a new list row for authors
   function createAuthorRow(itemData) {
     var newTr = $("<tr>");
     newTr.data("author", itemData);
     newTr.append("<td>" + itemData.name + "</td>");
     newTr.append("<td> " + itemData.Posts.length + "</td>");
     newTr.append("<td><a href='/blog?author_id=" + itemData.id + "'>Go to Posts</a></td>");
     newTr.append("<td><a href='/cms?author_id=" + itemData.id + "'>Create a Post</a></td>");
     newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
     return newTr;
   }
 
   // Function for retrieving authors and getting them ready to be rendered to the page
   function getItem() {
     $.get("/api/view", function(data) {
       var rowsToAdd = [];
       for (var i = 0; i < data.length; i++) {
         rowsToAdd.push(createAuthorRow(data[i]));
       }
       renderAuthorList(rowsToAdd);
       nameInput.val("");
     });
   }
 
   // A function for rendering the list of authors to the page
   function renderAuthorList(rows) {
     authorList.children().not(":last").remove();
     authorContainer.children(".alert").remove();
     if (rows.length) {
       console.log(rows);
       authorList.prepend(rows);
     }
     else {
       renderEmpty();
     }
   }