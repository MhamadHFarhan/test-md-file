function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

$("body").bind("cut copy paste", (e) => {
  e.preventDefault();
});

$("html").on("contextmenu", (e) => {
  e.preventDefault();
  return false;
});

$("html").keydown((event) => {
  if (event.keyCode === 123) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode) {
    return false;
  } else if (event.ctrlKey && event.keyCode) {
    return false;
  }
});

// Setup the variables

// document.addEventListener("visibilitychange", () => {
//   document.title = document.visibilityState;
// });
