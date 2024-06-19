
function display(){
  let profileImg=document.getElementById('profileImg');
    const storedImage=JSON.parse(localStorage.getItem('hrJson')).Image;
    profileImg.src=storedImage;

    let fullName=document.getElementById('fullName');
   const storedName=JSON.parse(localStorage.getItem('hrJson')).full_name;
   fullName.value=storedName;


   let Job=document.getElementById('Job');
   const storedPosition=JSON.parse(localStorage.getItem('hrJson')).Postion;
   Job.value=storedPosition;

   let phone=document.getElementById('Phone');
   const storedPhone=JSON.parse(localStorage.getItem('hrJson')).Phone;
   phone.value=storedPhone;

   let email=document.getElementById('Email');
   const storedEmail=JSON.parse(localStorage.getItem('hrJson')).email;
   email.value=storedEmail;



}
display();
// current pass
// let storedPassword=JSON.parse(localStorage.getItem('hrJson')).password;
// console.log("cp",storedPassword);

// document.getElementById('currentPassword').addEventListener('input',function(){
//   const currentPassword=document.getElementById('currentPassword').value;
//   console.log(currentPassword);
//   if (currentPassword!==storedPassword && currentPassword!==''){
//     document.getElementById('error').textContent='the current password is wrong';
//     return;
    
//     }

//   else
//   document.getElementById('error').textContent='';

    

// });

// remove picture

document.addEventListener('DOMContentLoaded',function(){

  const rmv_img = document.getElementById("rmv_img");
// const profileImg=document.getElementById("profileImg");        
rmv_img.addEventListener('click',function(e){
  e.preventDefault();
  console.log('remove Picture link clicked');
    profileImg.src="";
    onInput();
  

    
    console.log(profileImg);
});


 // upload picture

 const changePicLink = document.getElementById('changePicLink');
        
 const fileInput = document.getElementById("fileInput");
 const profileImg =document.getElementById('profileImg');

 console.log('changePicLink:', changePicLink);
 console.log('fileInput:', fileInput);
 console.log('profileImg:', profileImg);

 changePicLink.addEventListener('click', function (e) {
   e.preventDefault();
   console.log('Change Picture link clicked');
   fileInput.click();
 });

 fileInput.addEventListener('change', function () {
   const file = fileInput.files[0];
   if (file) {
     const reader = new FileReader();
     reader.onload = function (e) {
       console.log('File selected');
       profileImg.src = e.target.result;
     };
     reader.readAsDataURL(file);
   }
 });
});




function onInput() {
  let isValid = true;

  // fullname
  let nameInput = document.getElementById("fullName");
  const name = nameInput.value;
  localStorage.setItem("hrJson", JSON.stringify({ ...JSON.parse(localStorage.getItem('hrJson')), full_name: name }));


  // possition
  let JobInput = document.getElementById("Job");
  const Job = JobInput.value;
  localStorage.setItem("hrJson", JSON.stringify({ ...JSON.parse(localStorage.getItem('hrJson')), Postion: Job }));


  // phone
  let PhoneInput = document.getElementById("Phone");
  const Phone = PhoneInput.value;
  localStorage.setItem("hrJson", JSON.stringify({ ...JSON.parse(localStorage.getItem('hrJson')), Phone: Phone }));


  // email
  let EmailInput = document.getElementById("Email");
  const Email = EmailInput.value;
  const EmailPat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (Email === "" || !EmailPat.test(Email)) {
    document.getElementById("errorEmail").innerHTML = "Invalid email address";
    isValid = false;
  } else {
    document.getElementById("errorEmail").innerHTML = "";
    localStorage.setItem("hrJson", JSON.stringify({ ...JSON.parse(localStorage.getItem('hrJson')), email: Email }));
  }




  // current pass
let storedPassword=JSON.parse(localStorage.getItem('hrJson')).password;
document.getElementById('currentPassword').addEventListener('input',function(){
  const currentPassword=document.getElementById('currentPassword').value;
  console.log(currentPassword);
  if (currentPassword!=storedPassword && currentPassword!=''){
    document.getElementById('error').textContent='the current password is wrong';
    isValid = false;
    return;
    
    }

  else
  document.getElementById('error').textContent='';

    

});



  // new password
  let newPassword = document.getElementById('newPassword').value;
  let renewPassword = document.getElementById('renewPassword').value;

  const passPat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (newPassword !== "" && !passPat.test(newPassword)) {
    document.getElementById("error1").innerHTML = "Invalid password. Password must be at least 8 characters long and contain at least one letter and one number";
    isValid = false;
    return;
  } else {
    document.getElementById("error1").innerHTML = "";
    if (newPassword === renewPassword) {
      localStorage.setItem("hrJson", JSON.stringify({ ...JSON.parse(localStorage.getItem('hrJson')), password: renewPassword }));
    } else {
      document.getElementById("error2").innerHTML = "Passwords do not match";
      isValid = false;
      return;
    }
  }

  return isValid;
}
let saveButt = document.getElementById('saveButt');
saveButt.addEventListener("click", function(event) {
  event.preventDefault();
  if (onInput()) {
    let profileImgSrc = document.getElementById('profileImg').src;
    let fullNameValue = document.getElementById('fullName').value;
    let jobValue = document.getElementById('Job').value;
    localStorage.setItem('hrJson', JSON.stringify({
      ...JSON.parse(localStorage.getItem('hrJson')),
      Image: profileImgSrc,
      full_name: fullNameValue,
      Postion: jobValue,
      

    }));
    window.location.href = '../profile/profile.html'; 
    alert('Profile updated successfully!');
  }
});




