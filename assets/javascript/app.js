var topics = ["burger", "pizza", "sandwich", "salad", "soup", "chips", "steak", "smoothie", "fries", "burrito", "taco"];
var API_key = "vuhLAezXLof5lt9HMtQdMox0ZRd207JU";

function renderButtons() {

    // Deleting the buttons prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var newButton = $("<button>");
      // Adding a class of movie to our button
      newButton.addClass("food");
      // Adding a data-attribute
      newButton.attr("data-name", topics[i]);
      // Providing the initial button text
      newButton.text(topics[i]);
      // Adding the button to the buttons-view div
      $("#buttons-view").append(newButton);
    }
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  