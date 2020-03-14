$(document).ready(function() {

//This next section is for the contest page to submit a piece of art
const loginForm = $("form.login");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");
  
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      const userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
      $.post("/api/login", {
        email: email,
        deleteCode: password
      })
        .then(function(data) {
          console.log(data.email + " " + data.password)
          window.location.replace("/members");
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    $("#pictureSubmit").on("click", function () {
        $.post("api/contestPiece/", { title: "Exodus", chapter: "1" })
            .then(function(data) {
                console.log("Picture submitted!" + data);
            });
    })

});