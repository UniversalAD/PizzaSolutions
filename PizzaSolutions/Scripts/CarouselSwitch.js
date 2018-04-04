$(".kitchen").click(function () {
    console.log("kitchen");

    $("#swap-1").attr('src', '/Content/Images/Papa-Johns---Kitchen-Conversion.png');
    $("#swap-2").attr('src', '/Content/Images/Rosa---Kitchen-Conversion.png');
    $("#swap-3").attr('src', '/Content/Images/PizzaHut-Kitchen-Conversion-Magnet_03.png');
});

$(".calendar").click(function () {
    console.log("calendar");

    $("#swap-1").attr('src', '/Content/Images/Pizza-Hut---Calendar.png');
    $("#swap-2").attr('src', '/Content/Images/Dominos-Pizza---Cal.png');
    $("#swap-3").attr('src', '/Content/Images/Hungry-Howies-Calendar-Magnet_03.png');
});

$(".schedule").click(function () {
    console.log("schedule");
    $("#swap-1").attr('src', '/Content/Images/Mamas-Pizza-Cowboys-Sch.png');
    $("#swap-2").attr('src', '/Content/Images/Angie-Thomas---Keller-Williams.png');
    $("#swap-3").attr('src', '/Content/Images/PizzaHut-Schedule-Magnet_03.png');
});

$(".emergency").click(function () {
    console.log("emergency");
    $("#swap-1").attr('src', '/Content/Images/Papa-Johns---Hopper-Properties-Realtor-(1).png');
    $("#swap-2").attr('src', '/Content/Images/Pizza-Hut---Coldwell-Banker-(1).png');
    $("#swap-3").attr('src', '/Content/Images/Dominoes-Emergency-Magnet_03.png');
});