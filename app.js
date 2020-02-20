$(document).ready(function () {
  $("form.portero").change(() => {
    const goalsPerGame = $("#goalsPerGame").val();
    const savesPerGame = $("#savesPerGame").val();
    const shootsSaved = $("#shootsSaved").val();
    const age = $("#ageGoalkeeper").val();
    let price = (((1 / goalsPerGame) * 0.5) + ((savesPerGame / 4) * 0.3) + ((shootsSaved / 100) * 0.2)) * 100000000;
    if (age > 18 && age < 28) {

    } else if (age < 32) {
      price *= 0.75;
    } else {
      price *= 0.40;
    }
    $(".priceGoalkeeper p").html("$ " + price.toFixed(2));
  });
  $("form.defenza").change(() => {
    const intPG = $("#intPG").val();
    let regPG = $("#regPG").val();
    const age = $("#ageDefender").val();
    if (regPG < 0.1) {
      regPG = 0.1;
    }
    let price = (((intPG / 1.3) * 0.7) + ((0.5/regPG) * 0.3)) * 80000000;
    if (price > 120000000) {
      price = 120000000;
    }

    if (age > 18 && age < 28) {

    } else if (age < 32) {
      price *= 0.75;
    } else {
      price *= 0.40;
    }
    $(".priceDefender p").html("$ " + price.toFixed(2));
  });
  $("form.medio").change(() => {
    const ppc = $("#ppc").val();
    const asists = $("#asists").val();
    const age = Number($("#ageMid").val());
    let price = (((ppc / 90) * 0.7) + ((asists/8) * 0.3)) * 150000000;

    if (age > 18 && age < 28) {

    } else if (age < 32) {
      price = price * 0.75;
    } else {
      price = price * 0.40;
    }
    $(".priceMid p").html("$ " + price.toFixed(2));
  });
  $("form.delantero").change(() => {
    const goalsPerGame = $("#goalsPerGame2").val();
    const coef = $("#coef").val();
    const asists = $("#asists2").val();
    const age = Number($("#ageFor").val());
    let price = (((coef / 2) * 0.4) + ((goalsPerGame/36) * 0.4) + ((asists/25) * 0.2) ) * 200000000;

    if (age > 18 && age < 28) {

    } else if (age < 32) {
      price = price * 0.75;
    } else {
      price = price * 0.40;
    }
    $(".priceStr p").html("$ " + price.toFixed(2));
  });
});