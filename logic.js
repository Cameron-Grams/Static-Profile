console.log( 'in logic for site' );

var modalOverlay = document.querySelector( "#css-modalOverlay" );

var modal = document.querySelector( "#css-modal" );
var closeButton = document.querySelector( "#closeModal" );

/*
const projectObject = {
     title: "TITLE OF OBJECT",
     firstParagraph: "Text text text",
     secondParagraph:"2 Text text text",
     thirdParagraph: "3 Text text text"
    };
*/

const endpoint = "http://localhost:8080/projects";

const retrieveProject = ( index ) => {
        fetch( `${ endpoint }`, {
            method: 'POST', 
            body: JSON.stringify( index ), 
            headers: new Headers({
              'Content-Type': 'application/json'
            } )
        } ).then( res => 
            res.json() 
        )
        .then( json => {
             addProjectToDOM( json ); 
            } )
        .catch( error => console.error('Error:', error ))
    };

const addProjectToDOM = ( projectObject ) => {
        var modalTitleNode = document.createElement( "h1" );
        var modalTitle = document.createTextNode( projectObject.title ); 
        modalTitleNode.className = "css-modalElement";
        modalTitleNode.appendChild( modalTitle );

        var modalFirstParagraphNode = document.createElement( "p" );
        var modalFirstParagraph = document.createTextNode( projectObject.firstParagraph );
        modalFirstParagraphNode.appendChild( modalFirstParagraph );

        var modalSecondParagraphNode = document.createElement( "p" );
        var modalSecondParagraph = document.createTextNode( projectObject.secondParagraph );
        modalSecondParagraphNode.appendChild( modalSecondParagraph );

        var modalThirdParagraphNode = document.createElement( "p" );
        var modalThirdParagraph = document.createTextNode( projectObject.thirdParagraph );
        modalThirdParagraphNode.appendChild( modalThirdParagraph );

        // build up with prepend...
        modalOverlay.prepend( modalThirdParagraphNode );
        modalOverlay.prepend( modalSecondParagraphNode );
        modalOverlay.prepend( modalFirstParagraphNode );
        modalOverlay.prepend( modalTitleNode );
};




closeButton.addEventListener("click", function() {
    while( modalOverlay.firstChild ){
        modalOverlay.removeChild( modalOverlay.firstChild );
    };
    modal.classList.toggle("closed");
});

function toggleAndSend( e ) {
    modal.classList.toggle("closed");
    const indexValue = e.target.value;
    const index = {
        index: indexValue
    };
    console.log( 'index for this project: ', index );
    retrieveProject( index );
}

modal.classList.toggle("closed");

