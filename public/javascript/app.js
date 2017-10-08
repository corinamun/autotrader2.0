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
  const make = $("#make").val().trim();
  const model = $("#model").val().trim();
  const year = $("#year").val().trim();
  const mileage = $("#mileage").val().trim();
  const city = $("#city").val().trim();
  const bodyStyle = $(".radio-inline [name = 'optradio']:checked").val();
  
  console.log(make);
  console.log(model);
  console.log(year);
  console.log(mileage);
  console.log(city);
  console.log(bodyStyle);
}

createPost();
