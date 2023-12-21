console.log("Script loaded.");

// First, we wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find the form element by its ID
    var form = document.getElementById('form');

    // Check if the form exists to avoid null reference errors
    if (form) {
        // Find the div with data-role="page-header" inside the form
        var pageHeaderDiv = form.querySelector('div[data-role="page-header"]');

        // Check if the div exists inside the form
        if (pageHeaderDiv) {
            // Add a click event listener to the div
            pageHeaderDiv.addEventListener('click', function() {
                // When the div is clicked, log 'Hello World' to the console
                console.log('Hello World');
            });
        }
    }
});
