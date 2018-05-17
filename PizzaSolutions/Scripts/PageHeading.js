$(document).ready(function () {
    var currentPage = document.location.href.substring(document.location.href.lastIndexOf("/") + 1, document.location.href.length);

    if (currentPage === "Advertisers") {
        $("#heading-2").text("Advertisers");       
    }
    if (currentPage === "Distributors") {
        $("#heading-2").text("Distributors")
    }
    if (currentPage === "Partnership") {
        $("#heading-2").text("Agreement");
    }

    if (currentPage === "Magnets") {
        $("#heading-2").text("Magnets");
    }
    
    else {
        return false;
    }
});