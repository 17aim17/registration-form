export const modalFunction = yourMessage => {
  // Get the modal
  var modal = document.getElementById('myModal');
  const modal_messsage = document.getElementById('model-message');

  modal_messsage.innerHTML = `
   ${yourMessage}
`;
  // Get the button that opens the modal

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];

  // When the user clicks the button, open the modal
  modal.style.display = 'block';
  // When the user clicks on <span> (x), close the modal
  span.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // When the user clicks anywhere outside of the modal, close it

  window.onClick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
};
