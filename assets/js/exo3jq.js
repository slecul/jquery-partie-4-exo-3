$(function(){
  $('#submit').click(function(){
    var userFirstName = $('#firstName').val();
    var userLastName = $('#lastName').val();
    var userPhone = $('#phone').val();
    var userMail = $('#mail').val();
    var regexName = /^[a-zA-Z-]+$/;
    var regexPhone = /^[0-9]{10}$/;
    var regexMail = /^[\w._-]+@[\w.-_]+[.][a-z]+$/;
     if(userFirstName.match(regexName) && userLastName.match(regexName) && userPhone.match(regexPhone) && userMail.match(regexMail)){
       alert('Merci de votre participation.');
     }else{
       alert('Attention, le nom et le prémon ne doivent contenir que des lettres et des tirets, le numéro de téléphone doit contenir dix chiffres et l\'adresse mail doit être conforme.');
     }
    // console.log(userFirstName);
    // if(userFirstName.match(regexName)){
    //   alert('coucou');
    // }else{
    //   alert('coucou2');
    // }
  });
});
