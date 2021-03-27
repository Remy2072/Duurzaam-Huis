//  *KLEUREN VERANDEREN --------------------------------------------------
$(".textbox input").focusout(function () {
    if ($(this).val() == "") {
      $(this).siblings().removeClass("hidden");
      $(this).css("background", "#554343");
    } else {
      $(this).siblings().addClass("hidden");
      $(this).css("background", "#484848");
    }
  });

  $(".textbox input").keyup(function () {
    var inputs = $(".textbox input");
    if (inputs[1].value.length > 7) {
      if (inputs[2].value == inputs[3].value) {
        if (inputs[2].value.length && inputs[3].value.length > 7) {
          if (
            inputs[0].value != "" &&
            inputs[1].value &&
            inputs[2].value &&
            inputs[3].value
          ) {
            $(".login-btn").attr("disabled", false);
            $(".login-btn").addClass("active");
          } else {
            $(".login-btn").attr("disabled", true);
            $(".login-btn").removeClass("active");
          }
        } else {
        $(".login-btn").attr("disabled", true);
        $(".login-btn").removeClass("active");
      }
      } else {
        $(".login-btn").attr("disabled", true);
        $(".login-btn").removeClass("active");
      }
    } else {
      $(".login-btn").attr("disabled", true);
      $(".login-btn").removeClass("active");
    }
  });