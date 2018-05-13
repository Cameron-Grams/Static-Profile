var modal = document.querySelector( "#css-modal" );
var modalOverlay = document.querySelector( "#modal-overlay" );
var closeButton = document.querySelector( "#closeModal" );
var openButton = document.querySelector( "#openModal" );

closeButton.addEventListener("click", function() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});



