
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later

      
        fields: {
            User_ID: {
                

                validators: {
                    alpha: true,
                        stringLength: {
                        min: 5,
                        max:12,
                    },
                        notEmpty: {
                        message: 'Please Enter your User Id'
                    }
                }
            },
             name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please Enter your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please Enter a vaild phone number with area code'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please Enter your street address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please Enter your city'
                    }
                }
            },
             country: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter your country'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter your state'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please Enter a vaild zip code'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});
  