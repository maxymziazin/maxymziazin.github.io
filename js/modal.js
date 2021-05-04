$(function () {
  const $openModal = $("#open-modal");
  const $signInModal = $("#sign-in-modal");
  const $resetPassModal = $("#reset-pass-modal");
  const $resetPassBtn = $("#reset-pass-btn");

  $openModal.on("click", (e) => {
    $signInModal.addClass("active");
  });

  $signInModal.on("click", (e) => {
    e.target.className === "modal-s active"
      ? $signInModal.removeClass("active")
      : null;
  });

  $resetPassBtn.on("click", (e) => {
    $signInModal.removeClass("active");
    $resetPassModal.addClass("active");
  });

  $resetPassModal.on("click", (e) => {
    e.target.className === "modal-s active"
      ? $resetPassModal.removeClass("active")
      : null;
  });
});
