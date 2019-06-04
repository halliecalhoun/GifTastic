var topics = ["burger", "pizza", "sandwich", "salad", "soup", "pasta", "smoothie", "fries", "burrito", "taco"];
var API_key = "vuhLAezXLof5lt9HMtQdMox0ZRd207JU";


function displayFoodInfo() {

    // YOUR CODE GOES HERE!!! HINT: You will need to create a new div to hold the JSON.
    var gifSearch = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&limit=12&apikey=" + API_key;
    console.log(queryURL);

    $.ajax({
      url:queryURL,
      method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#gif-div").empty();
   
        for (var i = 0; i < response.data.length; i++) {
          // add if != "r" && != "pg-13" 
        var gifInfoDiv = $("<div>");
        gifInfoDiv.addClass("gifInfoContent");

        var foodRating = $("<h3>").text("Rating: " + response.data[i].rating);

        var imageDiv = $("<img>");
        // add fixed height gif from data object array in console log
        // imageDiv.attr("src", response.data[i].images["fixed_height"].url);
        imageDiv.attr("src", response.data[i].images["original_still"].url);
        imageDiv.attr("data-still", response.data[i].images["original_still"].url);
        imageDiv.attr("data-animate", response.data[i].images["original"].url);
        imageDiv.attr("data-state", "still");
        imageDiv.addClass("gif");
    
        gifInfoDiv.append(foodRating);
        gifInfoDiv.append(imageDiv);
        $("#gif-div").append(gifInfoDiv);
        }
    })
  };

  // gif on click pause function
  // $(".gif").on("click", function() {
    $("#gif-div").on("click", ".gif", function() {
      var state = $(this).attr("data-state");
      if (state === 'still') {
        var animate = $(this).attr("data-animate");
        $(this).attr("src", animate);
        $(this).attr("data-state", "animate");
        // state = animate;
      } else {
        var still = $(this).attr("data-still");
        $(this).attr("src", still);
        $(this).attr("data-state", "still");
        // $(this).attr("src", $(this).attr("data-still"));
        // $(this).attr("data-state", "still");
      }
    });

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
      newButton.addClass("btn btn-primary");
      // Adding a data-attribute
      newButton.attr("data-name", topics[i]);
      // Providing the initial button text
      newButton.text(topics[i]);
      // Adding the button to the buttons-view div
      $("#buttons-view").append(newButton);
    }
  }  
  
  // Event handler for user clicking the select-artist button
  $("#add-food").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var getGif = $("#food-input").val().toLowerCase().trim();
    if (getGif != "") {
        topics.push(getGif);
        $("#food-input").val("");

    }
    renderButtons();
    
   
  });
  $(document).on("click", ".food", displayFoodInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();