const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get("success") === "1") {
  const popup = document.getElementById("signupPopup");

  popup.classList.remove("hidden");
  popup.classList.add("flex");

  // Auto redirect after 2 seconds
  setTimeout(() => {
    window.location.href = "login.php";
  }, 2000);
}
