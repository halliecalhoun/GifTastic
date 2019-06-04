var topics = ["burger", "pizza", "sandwich", "salad", "soup", "chips", "steak", "smoothie", "fries", "burrito", "taco"];
var API_key = "vuhLAezXLof5lt9HMtQdMox0ZRd207JU";


function displayFoodInfo() {

    // YOUR CODE GOES HERE!!! HINT: You will need to create a new div to hold the JSON.
    var gifSearch = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&limit=10&apikey=" + API_key;
    console.log(queryURL);

    $.ajax({
      url:queryURL,
      method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#gif-div").empty();
   
        for (var i = 0; i < response.data.length; i++) {
        var gifInfoDiv = $("<div>");
        gifInfoDiv.addClass("gifInfoContent");

        var foodRating = $("<h1>").text("Rating: " + response.data[i].rating);

        var imageDiv = $("<img>");
        imageDiv.attr("src", response.data[i].images["original_still"].url);
        imageDiv.attr("data-still", response.data[i].images["original_still"].url);
        imageDiv.attr("data-original", response.data[i].images["original"].url);
        imageDiv.addClass("gif");
        // var artistURL = $("<a>").attr("href", response.url).append(artistName);
        // var artistImage = $("<img>").attr("src", response.thumb_url);
        // var trackerCount = $("<h2>").text(response.tracker_count + " fans tracking this artist");
        // var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " upcoming events");
        // var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");
        gifInfoDiv.append(foodRating);
        gifInfoDiv.append(imageDiv);
        $("#gif-div").append(gifInfoDiv);
        
  
        }

     
    })
  };


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
  $("#add-gif").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var getGif = $("#gif-input").val().toLowerCase().trim();
    if (getGif != "") {
        topics.push(getGif);

    }
    renderButtons();
    
   
  });
  $(document).on("click", ".food", displayFoodInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();