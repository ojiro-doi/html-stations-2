function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const $text = document.getElementById("text");
  if (check.checked === true) {
    $text.style.backgroundColor = "red";
  } else {
    $text.style.backgroundColor = "white";
  }
}
