$(document).ready(function () {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
  });
});

function signUpUser(email2, password2) {
  $.post("/api/signup", {
    email: email2,
     password: password2
  }).then(function(data, status) {
    $("form").empty();
    $("form").append("<h6>You signed up! Enjoy being inspired by the art on this site. You may proceed to the main page again and explore, like, and save art.</h6>");
    console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
  }).catch(function (err) {
    console.log(err);
  });
};
