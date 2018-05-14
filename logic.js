// const endpoint = "https://thawing-bayou-67848.herokuapp.com/";
const endpoint = "http://localhost:8080/";
let allProjects = null;

// fetch( `${ endpoint }wake` )
//    .then( res => res.json() ) 
//    .then( json => console.log( json.message ) );

var modalOverlay = document.querySelector( "#css-modalOverlay" );

var modal = document.querySelector( "#css-modal" );
var closeButton = document.querySelector( "#closeModal" );

const retrieveProject = ( index ) => {
        fetch( `${ endpoint }projects`, {
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

const callAllProjects = () => {
        fetch( `${ endpoint }all-projects`, {
            method: 'GET', 
            headers: new Headers({
              'Content-Type': 'application/json'
            } )
        } ).then( res => 
            res.json() 
        )
        .then( json => {
            console.log( 'here is the json: ', json );
            allProjects = json;
        } )
        .catch( error => console.error('Error:', error ))
    };

callAllProjects();
console.log( 'here are all projects: ', allProjects );

// a function with Secondary Effects: Whhhaaaaa......?
// As Master Yuan-Ma said: "If it works it is only partially stupid..." 
const addProjectToDOM = ( projectObject ) => {
        console.log( 'passed in: ', projectObject );
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
//    retrieveProject( index );
    console.log( allProjects );
    let currentProject = allProjects.projects[ indexValue ];  
    console.log( 'resolves to this project: ', currentProject );
    addProjectToDOM( currentProject );
}

modal.classList.toggle("closed");
