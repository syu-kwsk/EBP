function showalert(msg) {
  let ele = document.getElementById('result').textContent;
  if (ele == "HelloWorld\n") {
    alert("鍵が開いた");
    window.location.href='end';
  } else {
    alert(msg);
  }
}
