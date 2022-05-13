function GetLink() {
  //get value from text box and store it in local storage
  let link = $("#YouTube-link-input").val().split("v=");
  localStorage.setItem("linkid", link[link.length - 1]);
  ChangeVideo();
  console.log(localStorage.getItem("linkid"));
}

function ChangeVideo() {
  //add new video with new id
  let id = localStorage.getItem("linkid"); //get id from local storage
  $("lite-youtube").remove(); //remove current video
  $(".video").append(`<lite-youtube videoid="${id}"></lite-youtube>`);
}

function PreventEnter(element) {
  $(element).keydown(function (evt) {
    if (evt.keyCode == 13) {
      evt.preventDefault();
    }
  });
}

$(function () {
  $("#change-song-config, .overlay").click(function (e) {
    $("#get-link").toggle();
    GetLink();
  });
  PreventEnter("#YouTube-link-input");
  if (localStorage.getItem("linkid")) {
    ChangeVideo();
  }
});
