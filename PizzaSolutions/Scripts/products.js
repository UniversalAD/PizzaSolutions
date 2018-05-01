$(document).ready(function () {
    var path = "/Content/Images/Products/No_Logo";
    var logoPath = "/Content/Images/Logos";
    var product = "/Content/Images/Products";
    var productColorSelection;
    var productTypeSelection;

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
        var productColor = $(this).find("img").attr("name");
        var productSelection = $(this).find("img").attr("class");

        if (productSelection == "shirt") {
            $(".product-logo").removeClass("cup tote koosie");
            $("#green, #canvas, #blue, #orange").hide();
            $("#red, #black, #white, #gray").show();
            $(".product-logo").attr("src", logoPath + "/Dominos.png");
            $("#Color").val(productColor);

            if (productColor == "gray") {
                $(".ModalProductsImage").attr("src", path + "/Grey-Front.png");
            }
            if (productColor == "black") {
                $(".ModalProductsImage").attr("src", path + "/Black-Front.png");
            }
            if (productColor == "red") {
                $(".ModalProductsImage").attr("src", path + "/Red-Front.png");
            }
            if (productColor == "white") {
                $(".ModalProductsImage").attr("src", path + "/White-Front.png");
            }
        }

        if (productSelection == "cup") {
            $(".product-logo").removeClass("tote tote-second-logo koosie");
            $(".product-logo").addClass("cup");
            $("#blue, #canvas, #orange, #white").hide();
            $("#gray, #black, #red, #green").show();
            $("#Color").val(productColor);

            if (productColor == "black") {
                $(".ModalProductsImage").attr("src", path + "/cupblack.png");
                $(".product-logo").attr("src", logoPath + "/Pizza-Hut---Cup_for-black-cup.png");
            }
            if (productColor == "red") {
                $(".ModalProductsImage").attr("src", path + "/cup-red.png");
                $(".product-logo").attr("src", logoPath + "/Pizza-Hut---Cup_for-black-cup.png");
            }
            if (productColor == "white") {
                $(".ModalProductsImage").attr("src", path + "/cupwhite.png");
                $(".product-logo").attr("src", logoPath + "/Pizza-Hut---Cup_for-white-cup.png");
            }
            if (productColor == "green") {
                $(".ModalProductsImage").attr("src", path + "/cup-green.png");
                $(".product-logo").attr("src", logoPath + "/Pizza-Hut---Cup_for-black-cup.png");
            }
        }

        if (productSelection == "sport") {
            $(".product-logo").attr("src", "");
            $("#black, #gray, #white, #canvas").hide();
            $("#blue, #orange, #red, #green").show();
            $("#Color").val(productColor);

            if (productColor == "blue") {
                $(".ModalProductsImage").attr("src", product + "/Dominos-Pizza-Sports-Bottles.png");
            }
            if (productColor == "orange") {
                $(".ModalProductsImage").attr("src", product + "/Little-Caesars-Sports-Bottle.png");
            }
            if (productColor == "red") {
                $(".ModalProductsImage").attr("src", product + "/Pizza-Hut-Sports-Bottle.png");
            }
            if (productColor == "green") {
                $(".ModalProductsImage").attr("src", product + "/Jet's-Pizza-Sports-Bottle.png");
            }
        }

        if (productSelection == "tote") {
            $(".product-logo").removeClass("cup koosie");
            $(".product-logo").addClass("tote");
            $("#gray, #white, #orange").hide();
            $("#canvas, #black, #red, #blue, #green").show();
            $("#Color").val(productColor);

            if (productColor == "blue") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Blue.png");
                $(".product-logo").attr("src", logoPath + "/Pizza-Palace-of-Scott-Tote-Back.png");
            }
            if (productColor == "black") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Black.png");
                $(".product-logo").attr("src", logoPath + "/Pizza-Palace-of-Scott-Tote-Back.png");
            }
            if (productColor == "red") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Red.png");
                $(".product-logo").attr("src", logoPath + "/Pizza-Palace-of-Scott-Tote-Back.png");
            }
            if (productColor == "green") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Green.png");
                $(".product-logo").attr("src", logoPath + "/Pizza-Palace-of-Scott-Tote-Back.png");
            }
            if (productColor == "canvas") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Canvas.png");
                $(".product-logo").attr("src", logoPath + "/Pizza-Palace-of-Scott-Tote-Back.png");
            }
        }

        if (productSelection == "koosie") {
            $(".product-logo").addClass("koosie");
            $(".product-logo").attr("src", logoPath + "/Depot-The-1Pizzeria.png");
            $("#blue, #gray, #canvas, #orange, #green").hide();
            $("#red, #black, #white").show();
            $("#Color").val(productColor);

            if (productColor == "black") {
                $(".ModalProductsImage").attr("src", path + "/Koosie-Black.png");
            }
            if (productColor == "gray") {
                $(".ModalProductsImage").attr("src", path + "/Koosie-White.png");
            }
            if (productColor == "red") {
                $(".ModalProductsImage").attr("src", path + "/Koosie-Red.png");
            }
        }
        productTypeSelection = productSelection;
        productColorSelection = productColor;
    });

    $(".color-pick").click(function () {
        var id = $(this).attr("id");
        $("#Color").val(id);

        if (productTypeSelection == "shirt") {
            if (id == "gray") {
                $(".ModalProductsImage").attr("src", path + "/Grey-Front.png");
            }
            if (id == "red") {
                $(".ModalProductsImage").attr("src", path + "/Red-Front.png");
            }
            if (id == "black") {
                $(".ModalProductsImage").attr("src", path + "/Black-Front.png");
            }
            if (id == "white") {
                $(".ModalProductsImage").attr("src", path + "/White-Front.png");
            }
        }

        if (productTypeSelection == "cup") {
            $(".product-logo").attr("src", logoPath + "/Pizza-Hut---Cup_for-black-cup.png");
            if (id == "red") {
                $(".ModalProductsImage").attr("src", path + "/cup-red.png");
            }
            if (id == "green") {
                $(".ModalProductsImage").attr("src", path + "/cup-green.png");
            }
            if (id == "black") {
                $(".ModalProductsImage").attr("src", path + "/cupblack.png");
            }
            if (id == "gray") {
                $(".ModalProductsImage").attr("src", path + "/cupwhite.png");
                $(".product-logo").attr("src", logoPath + "/Pizza-Hut---Cup_for-white-cup.png");
            }
        }

        if (productTypeSelection == "tote") {
            if (id == "black") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Black.png");
            }
            if (id == "green") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Green.png");
            }
            if (id == "canvas") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Canvas.png");
            }
            if (id == "red") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Red.png");
            }
            if (id == "blue") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Blue.png");
            }
        }

        if (productTypeSelection == "koosie") {
            if (id == "red") {
                $(".ModalProductsImage").attr("src", path + "/Koosie-Red.png");
            }
            if (id == "black") {
                $(".ModalProductsImage").attr("src", path + "/Koosie-Black.png");
            }
            if (id == "white") {
                $(".ModalProductsImage").attr("src", path + "/Koosie-White.png");
            }

        }

        if (productTypeSelection == "sport") {
            if (id == "blue") {
                $(".ModalProductsImage").attr("src", product + "/Dominos-Pizza-Sports-Bottles.png");
            }
            if (id == "orange") {
                $(".ModalProductsImage").attr("src", product + "/Little-Caesars-Sports-Bottle.png");
            }
            if (id == "red") {
                $(".ModalProductsImage").attr("src", product + "/Pizza-Hut-Sports-Bottle.png");
            }
            if (id == "green") {
                $(".ModalProductsImage").attr("src", product + "/Jet's-Pizza-Sports-Bottle.png");
            }
        }
        productColorSelection = id;
    });

    $(function () {
        $(".ModalProductsImage")
            .mouseover(function () {
                if (productTypeSelection == "shirt") {
                    $(".product-logo").attr("src", logoPath + "/Dominos-Back.png");
                    $(".product-logo").addClass("back");

                    if (productColorSelection == "gray") {
                        $(this).attr("src", path + "/Grey-Back.png");
                    }
                    if (productColorSelection == "black") {
                        $(this).attr("src", path + "/Black-Back.png");
                    }
                    if (productColorSelection == "white") {
                        $(this).attr("src", path + "/White-Back.png");
                    }
                    if (productColorSelection == "red") {
                        $(this).attr("src", path + "/Red-Back.png");
                    }
                }

                if (productTypeSelection == "tote") {
                    $(".product-logo").addClass("tote-back");
                    if (productColorSelection == "white") {
                        $(".product-logo").attr("src", logoPath + "/Tote-Bag-Ad.png");
                    }
                    if (productColorSelection == "canvas") {
                        $(".product-logo").attr("src", logoPath + "/Tote-Bag-Ad.png");
                    }
                    if (productColorSelection == "black") {
                        $(".product-logo").attr("src", logoPath + "/Tote-Bag-Ad.png");
                    }
                    if (productColorSelection == "green") {
                        $(".product-logo").attr("src", logoPath + "/Tote-Bag-Ad.png");
                    }
                    if (productColorSelection == "red") {
                        $(".product-logo").attr("src", logoPath + "/Tote-Bag-Ad.png");
                    }
                    if (productColorSelection == "blue") {
                        $(".product-logo").attr("src", logoPath + "/Tote-Bag-Ad.png");
                    }
                    if (productColorSelection == "gray") {
                        $(".product-logo").attr("src", logoPath + "/Tote-Bag-Ad.png");
                    }
                }
            })
            .mouseout(function () {
                if (productTypeSelection == "shirt") {
                    $(".product-logo").removeClass("back");
                    $(".product-logo").attr("src", logoPath + "/Dominos.png");
                    if (productColorSelection == "gray") {
                        $(this).attr("src", path + "/Grey-Front.png");
                    }
                    if (productColorSelection == "black") {
                        $(this).attr("src", path + "/Black-Front.png");
                    }
                    if (productColorSelection == "white") {
                        $(this).attr("src", path + "/White-Front.png");
                    }
                    if (productColorSelection == "red") {
                        $(this).attr("src", path + "/Red-Front.png");
                    }
                }
                if (productTypeSelection == "tote") {
                    $(".product-logo").removeClass("tote-back");
                    $(".product-logo").attr("src", logoPath + "/Pizza-Palace-of-Scott-Tote-Back.png");
                }
            });
    });
});