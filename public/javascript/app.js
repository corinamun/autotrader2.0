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

  console.log(make);
  console.log(model);
  console.log(year);
  console.log(mileage);
  console.log(city);
  console.log(color);
  console.log(bodyStyle);
}

$('#detail-modal').on('show.bs.modal', function(event) {
  const button = $(event.relatedTarget);
  const make = button.data("make");
  const model = button.data("model");
  const contact = button.data("contact");
  const transmission = button.data("transmission");
  const description = button.data("description");
  const zipcode = button.data("zipcode");
  const modal = $(this)
  modal.find('.modal-title').text(`More Information on ${make} ${model}`);
  modal.find("#contact").text(`Contact Info: ${contact}`);
  modal.find("#transmission").text(`Transmission Type: ${transmission}`);
  modal.find("#description").text(`Description/Comments: ${description}`);
  modal.find("#zipcode").text(`Zipcode: ${zipcode}`);
});
