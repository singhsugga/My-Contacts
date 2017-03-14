
 //fuction calling for fetching saved contact when the page loads
  document.addEventListener("DOMContentLoaded", function() {
  fetchcontacts();
  });


function fetchcontacts() {
    // localStorage
  var contacts = JSON.parse(localStorage.getItem('contacts'));
  // Get output id
  var contactlist = document.getElementById('contactlist');

  // Build output
  contactlist.innerHTML = '';
  for(var i = 0; i < contacts.length; i++){
    var name = contacts[i].name;
    var email = contacts[i].email;
    var phone = contacts[i].phone;

    contactlist.innerHTML += '<li class="collection-item">'+
                               '<div>'+name+ 
                               '<a  onclick="deletecontact(\''+phone+'\')" class="secondary-content" href="#">'+
                               '<i class="material-icons red-text"><img class="icon"  src="icons/delete.png"/></i></a>'+
                               '<a style="margin-right: 8px;" href="tel:['+phone+
                               ']" class="secondary-content"><i class="material-icons"><img class="icon"  src="icons/phone.png"/></i></a>';
                            }
                        }





function deletecontact(phone){
  // Get contacts from localStorage
  var contacts = JSON.parse(localStorage.getItem('contacts'));
  // Loop throught bookmarks
  for(var i =0;i < contacts.length;i++){
    if(contacts[i].phone == phone){
      // Remove from array
      contacts.splice(i, 1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('contacts', JSON.stringify(contacts));

  // Re-fetch contacts
  fetchcontacts();
}







window.onload = function() {
    document.getElementById("savecontactbutton").onclick = function savecontact(e)
    {
    	 alert("hello");
    	 var contactname =document.getElementById('name').value;
    	 var contactemail =document.getElementById('email').value;
    	 var contactphone =document.getElementById('phone').value;
    	 if(!contactname || !contactemail){
    alert('Please fill in the form');
    return false;
  }
         
          var contact = {
                         name: contactname,
                         email: contactemail,
                         phone: contactphone
                         }

                         if(localStorage.getItem('contacts') === null){
   	   					 // Init array
						    var contacts = [];
						    // Add to array
						    contacts.push(contact);
						    // Set to localStorage
						    localStorage.setItem('contacts', JSON.stringify(contacts));
						  } 
						  else {
						    // Get contacts from localStorage
						    var contacts = JSON.parse(localStorage.getItem('contacts'));
						    // Add bookmark to array
						    contacts.push(contact);
						    // Re-set back to localStorage
						    localStorage.setItem('contacts', JSON.stringify(contacts));
						  }

						  // Clear form
						  
						  document.getElementById('name').value=' ';
						  document.getElementById('email').value= ' ';
						  document.getElementById('phone').value= ' ';

						  // Re-fetch contacts
						  fetchcontacts();

						  // Prevent form from submitting
						  e.preventDefault();
						    } 
						}