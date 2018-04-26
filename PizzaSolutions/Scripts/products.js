$(document).ready(function () {

    $(".box > a").click(function () {
        var item = $(this).data("target");
        console.log(item);

        if ($(".slide-items").hasClass("slide-open")) {
            $(".slide-items").removeClass("slide-open");            
            $(item).addClass("slide-open")
            console.log("has");
        }
        else {
            $(item).addClass("slide-open");           
            console.log("not");
        }
    });
});