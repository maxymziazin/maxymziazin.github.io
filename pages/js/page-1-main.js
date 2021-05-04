$(function () {
  //! Tabs

  const $tabsBtns = $(".tabs__item");
  const $mainBlocks = $(".main__inner");

  $tabsBtns.on("click focus", (e) => {
    $tabsBtns.each((index, elem) => {
      $(elem).removeClass("active");
    });

    $(e.target).addClass("active");

    const dataFilter = $(e.target).data("filter");

    $mainBlocks.each((index, elem) => {
      $(elem).data("type") === dataFilter
        ? $(elem).addClass("active")
        : $(elem).removeClass("active");
    });
  });

  //! Custom select

  $("#select-4").styler();
  $("#select-5").styler();
  $("#select-6").styler();

  //! Color-bars

  const $bars = $(".color-bars__bar");

  $bars.each((index, elem) => {
    const $barColor = $(elem).find(".color-bars__color");
    const value = +$(elem).find(".color-bars__value").text();

    if (value <= 9) {
      $barColor.css({ backgroundColor: "#e35b30", width: `${value * 2}%` });
    } else if (value >= 10 && value <= 19) {
      $barColor.css({ backgroundColor: "#e89f12", width: `${value * 2}%` });
    } else {
      $barColor.css({ backgroundColor: "#3fb715", width: `${value * 2}%` });
    }
  });
});
