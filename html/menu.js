document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.getElementById("dropdown");
    var dropdownContent = dropdown.querySelector(".dropdown-content");

    dropdown.addEventListener("click", function(event) {
        event.stopPropagation();
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function(event) {
        dropdownContent.style.display = "none";
    });

    dropdownContent.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});
