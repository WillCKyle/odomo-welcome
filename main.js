function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("Email");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (currentScrollPos > prevScrollpos) {
    document.getElementById("navbar").style.opacity = "0";
    document.getElementById("footer").style.bottom = "-60px";
  } else {
    document.getElementById("navbar").style.opacity = "1";
    document.getElementById("footer").style.bottom = "0";
  }
  prevScrollpos = currentScrollPos;
}
