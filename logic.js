console.log( 'in logic for site' );


var modal = document.querySelector( "#css-modal" );
var closeButton = document.querySelector( "#closeModal" );

closeButton.addEventListener("click", function() {
    modal.classList.toggle("closed");
});

function toggleAndSend( e ) {
    modal.classList.toggle("closed");
    console.log( e.target.value );
}

modal.classList.toggle("closed");

