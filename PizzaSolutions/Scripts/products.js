$(document).ready(function () {
    var path = "/Content/Images/Products/No_Logo";
    var logoPath = "/Content/Images/Logos";
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
            $(".product-logo").removeClass("cup tote tote-second-logo koosie");
            $("#white").removeClass("canvas");
            $("#gray").removeClass("green");
            $(".blue").css("display", "none");
            $(".product-logo").attr("src", logoPath + "/Dominos.png");

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
            $("#white").removeClass("canvas");
            $("#gray").addClass("green");
            $(".blue").css("display", "none");


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
            $(".product-logo").attr("src", logoPath + "/dominos-logo.png");
            $(".ModalProductsImage").attr("src", path + "/");
        }

        if (productSelection == "tote") {
            $(".product-logo").removeClass("cup koosie");
            $(".product-logo").addClass("tote");
            $(".product-logo").removeClass("tote-second-logo");
            $("#gray").addClass("green");
            $("#white").addClass("canvas");
            $(".blue").css("display", "inline-block");

            if (productColor == "blue") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Blue.png");
                $(".product-logo").attr("src", logoPath + "/Pizza-Palace-of-Scott-Tote-Bag-Black.png");
                $(".product-logo").addClass("tote-second-logo");
            }
            if (productColor == "black") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Black.png");
                $(".product-logo").attr("src", logoPath + "/Tote-Bag-Ad.png");
            }
            if (productColor == "red") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Red.png");
                $(".product-logo").attr("src", logoPath + "/Tote-Bag-Ad.png");
            }
            if (productColor == "green") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Green.png");
                $(".product-logo").attr("src", logoPath + "/Tote-Bag-Ad.png");
            }
            if (productColor == "canvas") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Canvas.png");
                $(".product-logo").attr("src", logoPath + "/Pizza-Palace-of-Scott-Tote-Bag-Black.png");
                $(".product-logo").addClass("tote-second-logo");
            }
        }

        if (productSelection == "koosie") {
            $(".product-logo").addClass("koosie");
            $(".product-logo").attr("src", logoPath + "/Depot-The-1Pizzeria.png");
            if (productColor == "black") {
                $(".ModalProductsImage").attr("src", path + "/Koosie-Black.png");
            }
            if (productColor == "gray") {
                $(".ModalProductsImage").attr("src", path + "/Koosie-White.png");
            }
        }
        productTypeSelection = productSelection;
        productColorSelection = productColor;
    });

    $(".color-pick").click(function () {
        var id = $(this).attr("id");

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
            if (id == "gray") {
                $(".ModalProductsImage").attr("src", path + "/cup-green.png");
            }
            if (id == "black") {
                $(".ModalProductsImage").attr("src", path + "/cupblack.png");
            }
            if (id == "white") {
                $(".ModalProductsImage").attr("src", path + "/cupwhite.png");
                $(".product-logo").attr("src", logoPath + "/Pizza-Hut---Cup_for-white-cup.png");
            }
        }

        if (productTypeSelection == "tote") {
            if (id == "black") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Black.png");
            }
            if (id == "gray") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Green.png");
            }
            if (id == "white") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Canvas.png");
            }
            if (id == "red") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Red.png");
            }
            if (id == "blue") {
                $(".ModalProductsImage").attr("src", path + "/Tote-Bags_Blue.png");
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

                //if (productTypeSelection == "tote") {
                //    console.log(productTypeSelection);
                //    console.log(productColorSelection);
                //    if (productColorSelection == "white") {
                //        $(".product-logo").attr("src", logoPath + "/Pizza-Palace-of-Scott-Tote-Back.png");
                //    }
                //    if (productColorSelection == "canvas") {
                //        $(".product-logo").attr("src", logoPath + "/Pizza-Palace-of-Scott-Tote-Back.png");
                //    }
                //    if (productColorSelection == "black") {
                //        $(".product-logo").attr("src", logoPath + "/Pizza-Palace-of-Scott-Tote-Back.png");
                //    }
                //    if (productColorSelection == "green") {
                //        $(".product-logo").attr("src", logoPath + "/Pizza-Palace-of-Scott-Tote-Back.png");
                //    }
                //    if (productColorSelection == "red") {
                //        $(".product-logo").attr("src", logoPath + "/Pizza-Palace-of-Scott-Tote-Back.png");
                //    }
                //    if (productColorSelection == "blue") {
                //        $(".product-logo").attr("src", logoPath + "/Pizza-Palace-of-Scott-Tote-Back.png");
                //    }
                //    if (productColorSelection == "gray") {
                //        $(".product-logo").attr("src", logoPath + "/Pizza-Palace-of-Scott-Tote-Back.png");
                //    }
                //}
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

                //if (productTypeSelection == "tote") {
                //    $(".product-logo").attr("src", logoPath + "/Pizza-Palace-of-Scott-Tote-Bag-Black.png");
                //}
            })
    });
});