let deferredPrompt;
const addBtn = document.querySelector('.add-button');
const footer = document.querySelector('.footer');
const addMsg = document.querySelector('.add-message');
addBtn.style.display = 'none'
footer.style.display = 'none'
addMsg.style.display = 'none'

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'inline-block';
  footer.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
          // hide our user interface that shows our A2HS button
          addBtn.style.display = 'none';
          footer.style.display = 'none'
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});

// Detects if device is on iOS
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test( userAgent );
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
  footer.style.display = 'block';
  footer.style.height = '3.5em';
  addMsg.style.display = 'inline-block';
}
