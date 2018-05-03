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

    if (currentPage === "Partnership") {
        $("#advertiser-header").addClass("partnership");
        $("#header-2").replaceWith("<h2>PARTNERSHIP AGREEMENT</h2>");
        $("#header-3").text("Sign Up");
        $("#img").attr("src", "/Content/Images/agreement_magnet.png");
        //    $('#para1').text("");
        //    $('#para2').text("");
        //    $('#para3').text("");
        //    $('#para4').text("");
        //    $('#para5').text("");
        //    $('#para6').text("");
        //    $('.partnershipform').show();
        //    //$("#para1").text("");
        $("#para2").text("This agreement confirms that Pizza Solutions will provide FREE CUSTOM COMMUNITY GUIDE MAGNETS in accordance with the terms of this agreement.");
        $("#para3").text("This agreement will go into effect upon examination of e-signatures and will remain in effect until one or both parties elect to terminate agreement in writing. The undersigned represents that he/she has been duly authorized to enter into this agreement and grants Pizza Solutions limited authorization to use the organization's name solely for the purpose of acquiring sponsorship from local businesses or organizations that may be interested in supporting the Custom Community Guide.");
        $("#para4").text('Depending on local business participation and support, under this agreement Pizza Solutions will provide up to, but no obligated to 1000 large, "4 x 6" high quality magnets on an as-needed or quarterly basis that will be distributed to your customers upon delivery of pizza. This is a COST FREE program for your company and will feature your business large and bold as the headliner on our Customer Community Guide.')
        $("#para5").text("In addition to allowing Pizza Solutions to use your name as a distributor point, we also ask that you affirm to local businesses, if asked, that you have endorsed the Custom Guide, and that their participation is very worthwhile in this advertising campaign.")
        $("#para6").text("Thank you for your support.");
    };
    //    //var signupBtn = "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#PartnershipModal'>Click Here to Sign Up</button >";
    //    //$('#button').append(signupBtn);
    //}

    if (currentPage === "Distributors") {
        $("#advertiser-header").addClass("distributors");
        $("#header-2").replaceWith("<h2><span>DISTRIBUTORS DISTRIBUTORS</span> DISTRIBUTORS</h2>");
        $("#header-3").replaceWith(" <h3 class='text-center font-white'>BIG AND BEUTIFUL MAGNETS FOR<br /> YOUR CUSTOMERS!.</h3>");
        $("#img").attr("src", "/Content/Images/bianco-pizza_03.png");
        $("#para1").text("");
        $("#para2").text("We provide your pizzeria with Free Pizza Magnets! All you have to do is hand a magnet out to each one of your customers with every single order going out your doors, And the best part is... your magnets are provided to you 100% FREE!");
        $("#para3").text("We encourage distributors to keep a small stock of the magnets at the register for dine-in and carry-out customers, in addition to the ones being handed out on delivery orders. Unlike direct mailers, which have a much higher TTT Rate, or Toss To Trash Rate, not one magnet will go to waste with our guaranteed customer connection solution.");
        $("#para4").text('Tip: Offer the magnet at the door. This will reduce the risk of unwanted, wasted magnets and leave more for the customers who use magnets.')
        $("#para5").text("")
        $("#para6").text("");
        var moreProductsBtn = "<a href='Products' class='btn btn-default red'>More Products</a>";
        $('#button').append(moreProductsBtn);
    }
    else {
        return false;
    }
});