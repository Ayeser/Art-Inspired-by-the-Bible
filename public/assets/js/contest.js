var myUpload = new FileUploadWithPreview('myUploader', {
  showDeleteButtonOnImages: true,
  text: {
    chooseFile: 'Choose file...',
    browse: 'Browse',
    selectedCount: 'files selected'
  },
  maxFileCount: 0,
  images: {
    baseImage: '',
    backgroundImage: '',
    successFileAltImage: '',
    successPdfImage: ''
  }
});

$(document).ready(function() {

//This next section is for the contest page to submit a piece of art
const loginForm = $("form.login");
    const titleInput = $("input#title-input");
    const passwordInput = $("input#password-input");
  
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      const userData = {
        title: titleInput.val().trim(),
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


    var myUploadInfoButton = document.querySelector("#pictureSubmit");
    myUploadInfoButton.addEventListener('click', function() {
      console.log('Upload:', myUpload, myUpload.cachedFile);
      myUpload.processFile();
      myUpload.refreshPreviewPanel();
      console.log("For example picture is: " + JSON.stringify(myUpload.cachedFileArray[0]));
      $.post("api/contestPieces/", { tite: $("input#title-input").val(), artist: $("input#artist-input").val(), book: "exodus", chapter: "1", deleteCode: $("input#password-input").val(), picture: JSON.stringify(myUpload.cachedFileArray[0]) })
          .then(function(data) {
              console.log("Picture submitted!" + data);
          });
    })

});