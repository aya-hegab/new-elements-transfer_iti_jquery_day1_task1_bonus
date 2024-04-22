var tmp;
$("input:eq(2)").on("click", function () {
  $("#parent").append(tmp);
});

$(document).on("click", "li", function () {
  tmp = $(this);
  // $(this).remove();
});

$("input:eq(1)").on("click", function () {
  $("ul:eq(0)").append(`<li>${$("input:eq(0)").val()}</li>`);
});
