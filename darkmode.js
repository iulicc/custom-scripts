document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form");
    var button = form.querySelector('div[data-id="111052249"] button');

    button.addEventListener("click", function() {
        console.log("Hello World");
    });
});
