function createPost() {
  $("#create-post").on("click", () => {
    $("#modal").modal("show");
  });
  $("#submit-btn").on("click", () => {
    $("#modal").modal("hide");
    userInput();
  });
}

function userInput() {
  const make = $("#make").val();
  const model = $("#model").val();
  const year = $("#year").val();
  const mileage = $("#mileage").val();
  const city = $("#city").val();
  const bodyStyle = $(".radio-inline [name = 'optradio']:checked").val();
  console.log(make);
  console.log(model);
  console.log(year);
  console.log(mileage);
  console.log(city);
  console.log(bodyStyle);
}

createPost();
