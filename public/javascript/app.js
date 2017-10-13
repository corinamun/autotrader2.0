function createPost() {
  $("#create-post").on("click", () => {
    $("#modal").modal("show");
  });
  $("#submit-btn").on("click", () => {
    $("#modal").modal("hide");
    userInput();
  });
}

createPost();

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
