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

function handleScroll() {
  const timelineColumns = document.querySelectorAll('.timeline-column');
  const viewportHeight = window.innerHeight;

  timelineColumns.forEach(column => {
    const rect = column.getBoundingClientRect();
    const topVisible = rect.top < viewportHeight * 0.55;
    const bottomVisible = rect.bottom > viewportHeight * 0.53;

    if (topVisible && bottomVisible) {
      column.style.animation = 'fadeIn 1200ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
    } else {
      column.style.animation = 'fadeOut 600ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
    }
  });
}

window.addEventListener('scroll', handleScroll);
