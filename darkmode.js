console.log("Script loaded.");

// First, we wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Then, we find the form element by its ID
    var form = document.getElementById('form');

    // Check if the form exists to avoid null reference errors
    if (form) {
        // Add a click event listener to the form
        form.addEventListener('click', function() {
            // When the form is clicked, log 'Hello World' to the console
            console.log('Hello World');
        });
    }
});
