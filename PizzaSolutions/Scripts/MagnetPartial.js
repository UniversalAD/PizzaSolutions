$(document).ready(function () {
    var currentPage = document.location.href.substring(document.location.href.lastIndexOf("/") + 1, document.location.href.length);

    if (currentPage === "Advertisers") {
        //$("#advertiser-header").addClass("partnership");
        $("#header-2").replaceWith("<h2><span>Advertisers Advertisers </span> Advertisers</h2>");
        $("#header-3").replaceWith('<h3 class="text-center font-white">"WE PRINT MAGNETS... THE PIZZA<br /> PLACE HAND THEM OUT.</h3>');
        $("#img").attr("src", "/Content/Images/magnet-delivered_03.png");
        $("#para1").text("ADVERTISING CAN BE TRICKY... PIZZA SOLUTIONS IS HERE TO SIMPLIFY IT FOR YOU");
        $("#para2").text("As a business leader you have 2 very important jobs, not only do you have to run your business, but also you need to grow your business. We're here to help you with the latter. You know, the stuff you don't really have time for. We'll custom design your ad for free and ship them to the pizzeria for you. From there, the pizza place hands one out to each customer with every order going out their doors.");
        $("#para3").text("It's really that simple.");
        $("#para4").text('Let us prove why our 40 years of experience can help your')
        $("#para5").text("business grow too!");
        $("#para6").text("");
    }

    else {
        return false;
    }
});