$(".stop").bind("cut copy paste", (e) => {
  e.preventDefault();
});

$(".stop").on("contextmenu", (e) => {
  e.preventDefault();
  return false;
});

$('.stop').keydown((event) => {
  if (event.keyCode === 123) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode) {
    return false;
  } else if (event.ctrlKey && event.keyCode) {
    return false;
  }
});

document.addEventListener("visibilitychange", () => {
  document.title = document.visibilityState;
});
