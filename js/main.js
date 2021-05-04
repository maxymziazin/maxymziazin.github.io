$(function () {
  //! Custom select

  $("#select-1").styler();
  $("#select-2").styler();
  $("#select-3").styler();

  //! Show more characteristics

  const $charContHidden = $("#charContHidden");
  const $charBtn = $("#charBtn");

  $charBtn.on("click", function () {
    if ($charBtn.text().trim() == "Больше") {
      $(
        ".characteristics__type--4, .characteristics__type--5, .characteristics__type--6"
      ).css("color", "#777777");

      $(
        ".characteristics__name--4, .characteristics__name--5, .characteristics__name--6"
      ).css("color", "#333333");
    }

    $charContHidden.slideToggle(200, function () {
      if ($charBtn.text().trim() == "Больше") {
        $charBtn.text("Скрыть");
      } else {
        $charBtn.text("Больше");

        $(".characteristics__type--4").css("color", "#8d8d8d");
        $(".characteristics__type--5").css("color", "#bebebe");
        $(".characteristics__type--6").css("color", "#e9e9e9");

        $(".characteristics__name--4").css("color", "#5d5d5d");
        $(".characteristics__name--5").css("color", "#9d9d9d");
        $(".characteristics__name--6").css("color", "#dedede");
      }
    });
  });

  //! Slider & input

  const $sliderInput = $("#supply-assurance").find("input");
  const $slider = $("#slider");
  const $errorMessage = $("#error-message");

  const slideMin = 4;
  const slideMax = 20;
  const sliderStartValue = 10;
  const regexp = /\D/;

  $slider.slider({
    animate: "slow",
    range: "min",
    min: slideMin,
    max: slideMax,
    value: sliderStartValue,
    slide: function (event, ui) {
      let value = parseInt(ui.value);
      $sliderInput.val(value);
    },
  });

  $sliderInput.val($slider.slider("value"));

  $sliderInput.on("change", function (event) {
    let value = $(this).val();

    if (regexp.test(value)) {
      $(this).addClass("error");
      $errorMessage.css("display", "block");

      setTimeout(() => {
        $(this).removeClass("error");
        $errorMessage.css("display", "none");
      }, 2000);

      value = String(sliderStartValue);
    }

    if (value === "") {
      value = String(sliderStartValue);
    }

    if (value.startsWith("0")) {
      value = Number(value);
    }

    if (value > slideMax) {
      value = slideMax;
      $(this).val(value);
    } else if (value < slideMin) {
      value = slideMin;
      $(this).val(value);
    }

    $(this).val(value);
    $slider.slider("value", value);
  });

  $sliderInput.on("input", function (event) {
    let value = $(this).val();

    if (regexp.test(value)) {
      value = value.slice(0, -1);
      $(this).val(value);
    }
  });

  //! Hide/show contacts

  const $contacts = $(".contacts__row");
  const $contactsInput = $(".contacts__title input");

  $contactsInput.on("change", function (event) {
    if ($(this).prop("checked")) {
      $contacts.hide(200);
    } else {
      $contacts.show(200);
    }
  });
});
