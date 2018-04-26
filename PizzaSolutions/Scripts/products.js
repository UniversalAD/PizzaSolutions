$(document).ready(function () {

    $(".box > a").click(function () {
        var item = $(this).data("target");

        if ($(".slide-items").hasClass("slide-open")) {
            $(".slide-items").removeClass("slide-open");
            $(item).addClass("slide-open")
        }
        else {
            $(item).addClass("slide-open");
        }
    });
    $(".box").click(function () {
        var src = $(this).find("img").attr("src");
        var imgId = $(this).find("img").attr("id");
        console.log(src);
        console.log(imgId);

        if (imgId == "dominos")
        {
            $(".product-logo").attr("src", "/Content/Images/Logos/dominos-logo.png");
            console.log("equals dominos");
        }

        else if (imgId == "pizza-hut")
        {
            $(".product-logo").attr("src", "/Content/Images/Logos/pizz-hut.png");
            console.log("equals hut");
        }

        $(".ModalProductsImage").attr("src", src);
    });

    $(".color-pick").click(function () {
        var id = $(this).attr("id");
        console.log(id);
    });
});