const allProjects = projects; 

const cleanModal = () => {
    while( modalOverlay.firstChild ){
        modalOverlay.removeChild( modalOverlay.firstChild );
    };
}

var modalOverlay = document.querySelector( "#css-modalOverlay" );
var modal = document.querySelector( "#css-modal" );
var closeButton = document.querySelector( "#closeModal" );

// a function with Secondary Effects: necessary since there is no render function in plain Javascript
// As Master Yuan-Ma said: "If it works it is only partially stupid..." 
const addProjectToDOM = ( projectObject ) => {
        cleanModal();
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

        modalOverlay.prepend( modalThirdParagraphNode );
        modalOverlay.prepend( modalSecondParagraphNode );
        modalOverlay.prepend( modalFirstParagraphNode );
        modalOverlay.prepend( modalTitleNode );
};

closeButton.addEventListener("click", function() {
    modal.classList.toggle("closed");
});

function toggleAndSend( e ) {
    modal.classList.toggle("closed");
    const indexValue = e.target.value;
    const index = {
        index: indexValue
    };
    let currentProject = allProjects[ indexValue ];  
    addProjectToDOM( currentProject );
}

modal.classList.toggle("closed");

