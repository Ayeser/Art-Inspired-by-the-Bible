$(document).ready(function () {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    console.log("Button clicked for form submitted");
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    console.log("Userdata.email is: " + userData.email);
    // emailInput.val("");
    // passwordInput.val("");
  });
});

function signUpUser(email2, password2) {
  console.log("And this console message should fire right before api post call is attempted, with email as: " + email2 + " and password as: " + password2);
  $.post("/api/signup", {
    email: email2,
    password: password2
  }).then(function (data, status) {
    console.log("You signed up! Enjoy being inspired by the art on this site.");
    console.log("Data: " + data + "\nStatus: " + status);
  }
  ).catch(function (err) {
    console.log(err);
  });
};
