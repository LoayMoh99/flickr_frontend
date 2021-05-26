// var img = $('img');
// img.css('display', 'none');

// $('#upload-button').click(function(){
//   $('#my-custom-design-upload').trigger('click');                 
//   return false;
// });

// function readfichier(e) {
//   if(window.FileReader) {
//     var file  = e.target.files[0];
//     var reader = new FileReader();
//     if (file && file.type.match('image.*')) {
//       reader.readAsDataURL(file);
//     } else {
//       img.css('display', 'none');
//       img.attr('src', '');
//     }
//     reader.onloadend = function (e) {
//       img.attr('src', reader.result);
//       img.css('display', 'block');
//     }
//   }
// }

// document.getElementById('my-custom-design-upload').addEventListener('change', readfichier, false)