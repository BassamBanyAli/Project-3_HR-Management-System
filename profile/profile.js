 async function checkIfINLocal() {
   if (!localStorage.getItem('hrJson')) {
     try {
       let response = await fetch('HR-info.json');
       let hrJson = await response.json();
       localStorage.setItem('hrJson', JSON.stringify(hrJson));
     } catch (error) {
       console.error('Failed to fetch HR-info.json:', error);
     }
   }
 }



 async function display() {
   await checkIfINLocal(); 
   try {
     const storedData = JSON.parse(localStorage.getItem('hrJson'));
     let image = document.getElementById('image');
     let name = document.getElementById('name');
     let Id = document.getElementById('id');
     let position = document.getElementById('position');
     let phone = document.getElementById('phone');
     let email = document.getElementById('email');
 
     image.src = storedData.Image;
     name.textContent = storedData.full_name;
     Id.textContent = storedData.ID;
     position.textContent = storedData.Postion;
     phone.textContent = storedData.Phone;
     email.textContent = storedData.email;
   } catch (error) {
     console.error('Error displaying data from localStorage:', error);
   }
 }
 display();

