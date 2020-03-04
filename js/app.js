const App = {

	loadPage( page, event ){

		// Prevent default action if an event was passed in
		if( event != undefined ){

			event.preventDefault();

		}

		// Load requested page
		fetch( `pages/${page}.html`, {
			headers: {
				'Content-Type': 'text/html'
			}
		} )
		.then( ( response ) => {

			return response.text();

		} )
		.then( ( html ) => {

			document.querySelector( '#page-content' ).innerHTML = html;

		} )
		.catch( ( error ) => {

			console.log( error );

		} );

	}

}