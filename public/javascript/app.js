var currentuserID = "";
function currentuser() {
  FB.getLoginStatus(function(response) {
    console.log("loginstatus just ran");
    currentuserID = response.authResponse.userID;

    console.log("your userID is the following ID " + currentuserID);

  });
};


var createuserID = function() {
  FB.getLoginStatus(function(response) {
    console.log("loginstatus just ran");
    $('#userID').val(response.authResponse.userID);

    console.log("your userID is " + response.authResponse.userID);

  });
};


function createPost() {
  console.log("FB loginstatus about to run");
  FB.getLoginStatus(function(response) {
    console.log("loginstatus just ran");
    // statusChangeCallback(response);

    console.log(response);
    console.log(response.status + "is your current login state with facebook.");

    if (response.status === "connected") {
      FB.getLoginStatus(function(response) {
        console.log("loginstatus just ran");
        $('#userID').val(response.authResponse.userID);
        $("#modal").modal("show");
        currentuser();
      });
    } else {
      alert("You are not logged in yet! Please login through facebook before posting any trades!")
      return;
    };
  });
}

$("#submit-btn").on("click", () => {
  $("#modal").modal("hide");
  userInput();
});


function userInput() {
  const make = $("#make").val().trim();
  const model = $("#model").val().trim();
  const year = $("#year").val().trim();
  const mileage = $("#mileage").val().trim();
  const city = $("#city").val().trim();
  const color = $("#color").val().trim();
  const bodyStyle = $(".radio-inline [name = 'optradio']:checked").val();
}

$("#detail-modal").on("show.bs.modal", (event) => {
  const button = $(event.relatedTarget);
  const make = button.data("make");
  const model = button.data("model");
  const contact = button.data("contact");
  const transmission = button.data("transmission");
  const description = button.data("description");
  const zipcode = button.data("zipcode");
  const modal = $(this);

  $(".modal-title").text(`More Information on ${make} ${model}`);
  $("#info-contact").text(`Contact Info: ${contact}`);
  $("#info-transmission").text(`Transmission Type: ${transmission}`);
  $("#info-description").text(`Description/Comments: ${description}`);
  $("#info-zipcode").text(`Zipcode: ${zipcode}`);
  $("#map").attr("src", `https://www.google.com/maps/embed/v1/search?key=AIzaSyCbRPJ4WPt885Uvh3ORlze25kJN6VsSE4A&q=${zipcode}`);
});

$('#create-post').on('click', function() {
  createPost();
});
