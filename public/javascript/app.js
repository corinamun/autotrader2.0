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

function moreInfo() {
  $(".btn-primary").on("click", () => {
    $("#detail-modal").modal("show");
    // $('#detail-modal').on('show.bs.modal', function(event) {
    //   const button = $(event.relatedTarget)
    //   const recipient = button.data("id");
    //   const modal = $(this)
    //   modal.find('.modal-title').text('New message to ' + recipient)
    //   modal.find('.modal-body input').val(recipient)
    // });
  });
}





moreInfo();
