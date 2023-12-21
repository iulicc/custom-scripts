console.log("Script loaded.");

document.addEventListener("DOMContentLoaded", function() {
    // Get the iframe with the specified class
    var iframe = document.querySelector('.preview-app__iframe__iframe-view');

    // Check if the iframe is available
    if (iframe) {
        // Access the contentDocument of the iframe
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // Access elements within the iframe
        var form = iframeDocument.getElementById("form");
        var button = form.querySelector('div[data-id="111052249"] button');

        // Add a click event listener to the button inside the iframe
        button.addEventListener("click", function() {
            console.log("Hello World");
        });
    } else {
        console.log("Iframe not found.");
    }
});
