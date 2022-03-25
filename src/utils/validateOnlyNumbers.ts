export default (e: any): void => {
  const theEvent = e;
  let key = '';
  // Handle paste
  if (theEvent.type === 'paste') {
    key = e.clipboardData.getData('text/plain');
  } else {
    // Handle key press
    key = String.fromCharCode(theEvent.keyCode || theEvent.which);
  }
  const regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    theEvent.preventDefault && theEvent.preventDefault();
  }
};
