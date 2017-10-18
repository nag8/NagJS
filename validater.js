jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});  
        $("#contact_form").validate({
    rules: {
        firstName: "required",
        lastName: "required",
        companyName: {
            required: true,
            no_special_characters: true,
            maxlength: 64
        },
        companyFullName: "required",
        password: {
            required: true,
            minlength: 6
        },
        confirmPassword: {
            required: true,
            minlength: 6,
            equalTo: "#mid-box4"
        },
        emailId: {
            required: true,
            email: true
        }
    },
    messages: {
        firstName: "Please enter your first name",
        lastName: "Please enter your last name",
        companyName: "Please enter company ID",
        companyName: {
            required: "Please enter company ID",
            no_special_characters: "Company ID should contain atleast one letter and no special characters",
            maxlength: "Company ID exceeded the maximum length"
        },
        companyFullName: "Please enter company name",
        password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 6 characters long"
        },
        confirmPassword: {
            required: "Please provide a password",
            minlength: "Your password must be at least 6 characters long",
            equalTo: "Please enter the same password as above"
        },
        emailId: "Please enter a valid email address",
        confirmemailId:{
        required:"Please confirm email address",
        equalTo :"Emailid and confirm emaild must be same"
        },
        agree: "Please accept Terms of use"
    }
});