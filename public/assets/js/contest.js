// var myUpload = new FileUploadWithPreview('myUploader', {
//   showDeleteButtonOnImages: true,
//   text: {
//     chooseFile: 'Choose file...',
//     browse: 'Browse',
//     selectedCount: 'files selected'
//   },
//   maxFileCount: 0,
//   images: {
//     baseImage: '',
//     backgroundImage: '',
//     successFileAltImage: '',
//     successPdfImage: ''
//   }
// });

$(document).ready(function() {

//This next section is for the contest page to submit a piece of art
const loginForm = $("form.login");
    const pictureInput = $("input#picture-input");
    const titleInput = $("input#title-input");
    const bookInput = $("input#book-input");
    const chapterInput = $("input#chapter-input");
    const artistInput = $("input#artist-input");
  
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      const userData = {
        title: titleInput.val().trim(),
        picture: pictureInput.val().trim(),
        artist: artistInput.val().trim(),
        book: bookInput.val().trim(),
        chapter: chapterInput.val().trim()
      };
      $.post("/api/contestPieces/", {
        title: userData.title,
        picture: userData.picture,
        artist: userData.picture,
        book: userData.book,
        chapter: userData.chapter
      })
        .then(function(data) {
          console.log("Image successfully added and will be reviewed by a team member before being added to the database");
        })
        .catch(function(err) {
          console.log(err);
        });
    });

    // var myUploadInfoButton = document.querySelector("#pictureSubmit");
    // myUploadInfoButton.addEventListener('click', function() {
      // console.log('Upload:', myUpload, myUpload.cachedFile);
      // myUpload.processFile();
      // myUpload.refreshPreviewPanel();
      // console.log("For example picture is: " + JSON.stringify(myUpload.cachedFileArray[0]));
    //   $.post("api/contestPieces/", { tite: $("input#title-input").val(), artist: $("input#artist-input").val(), book: "exodus", chapter: "1", deleteCode: $("input#password-input").val(), picture: $("input#picture-input").val() })
    //       .then(function(data) {
    //           console.log("Picture submitted!" + data);
    //       });
    // })

});