$(function () {
  $("#UpTask").on("click", function (event) {
    event.preventDefault();
    var taskName = $("input[name=TaskName]").val();
    var taskDescription = $("input[name=TaskDescription]").val();
    var toAdd = taskName + " - " + taskDescription;
    $("#TaskList").append("<li>" + toAdd + "</li>");
  });
});
