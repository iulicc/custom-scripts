console.log("Script loaded!!!!!");

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find the form element by its ID
    var form = document.getElementById('form');

    // Check if the form exists to avoid null reference errors
    if (form) {
        // Find the button with id="theme-btn" inside the form
        var themeButton = form.querySelector('button#theme-btn');

        // Check if the button exists inside the form
        if (themeButton) {
            // Add a click event listener to the button
            themeButton.addEventListener('click', function() {
                // When the button is clicked, log 'Hello World' to the console
                console.log('Hello World');
            });
        }
    }
});

