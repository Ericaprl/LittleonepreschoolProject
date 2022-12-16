// JS Created to FormEnrolling  to validete the form informations 
//by Erica Pereira - Student ID ( x21185999 )
function enrollingValidate() {
    var firstname = document.enro_form.firstname;
    var middlename = document.enro_form.middlename;
    var lastname = document.enro_form.lastname;
    var birth = document.enro_form.birth;
    var address = document.enro_form.address;
    var pfirstname = document.enro_form.pfirstname;
    var plastname = document.enro_form.plastname;
    var relationship = document.enro_form.relationship;
    var phone = document.enro_form.phone;
    var email = document.enro_form.email;


    if (firstname.value.length <= 0) {
        alert("First name needs to be filled");
        firstname.focus();
        return false;
    }

   
    if (middlename.value.length <= 0) {
        alert("Middle name needs to be filled");
        middlename.focus();
        return false;
    }
    if (lastname.value.length <= 0) {
        alert("Last name needs to be filled");
        lastname.focus();
        return false;
    }
   

    if (birth.value.length <= 0) {
        alert("Date of birth needs to be filled");
        birth.focus();
        return false;
    }

    if (address.value.length <= 0) {
        alert("Address needs to be filled");
        address.focus();
        return false;
    }

    if (pfirstname.value.length <= 0) {
        alert("First name needs to be filled");
        pfirstname.focus();
        return false;
    }
    if (plastname.value.length <= 0) {
        alert("Last name needs to be filled");
        plastname.focus();
        return false;
    }

    if (relationship.value.length <= 0) {
        alert("Relationship needs to be filled");
        relationship.focus();
        return false;
    }

    if (phone.value.length <= 0) {
        alert("Phone number needs to be filled");
        phone.focus();
        return false;
    }
    if (email.value.length <= 0) {
        alert("Email needs to be filled");
        email.focus();
        return false;
    }
   

    var checked_gender = document.querySelector('input[name = "gender"]:checked');

    if (checked_gender == null) {  
        alert('Gender needs to be selected '); 
        return false;
    }
  
}	



 


  