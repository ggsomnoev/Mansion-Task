(() => {    
    $(".form-container.sign-up-form").find(".input-field").each((key, inputField) => {
        $(inputField).on("focusout", () => {
            // on focusout validate the input field and the display the appropriate error message
            validate(inputField);
            displayErrorMessage(inputField, errors[inputField.name]);
            console.log(errors);
        });
        $(inputField).on("focusin", () => {
            //on focusin clear the error box
            displayErrorMessage(inputField, '');
        });
    });

    const errors = {};
    function validate(field) {
        const validation = {
            email: (field) => { return regexValidation(field) },
            username: (field) => { return regexValidation(field) },
            password: (field) => { return regexValidation(field) },
            repwd: () => { return repeatPasswordValidation() }
        }
        const errorMsgs = {
            email: "Invalid email format.",
            username: "Must be between 4 and 12 characters long.",
            password: "Must be between 6 and 12 characters long. Contain 1 lowercase, 1 uppercase letters and 1 number or special char.",
            repwd: "Passwords must match and be valid."
        }
        //Check the corresponding input field with it's correct validation function. Populate the errors object.
        if (!validation[field.name](field)) {
            errors[field.name] = errorMsgs[field.name];
        } else {
            //If the field is valid remove the error msg from the object
            delete errors[field.name];
        }
    }

    function displayErrorMessage(field, message) {
        const errorBox = $(field).parent().next();
        $(errorBox).text(message);
    }

    function regexValidation(inputField) {
        const regExps = {
            email: new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"),
            username: new RegExp("^[a-zA-Z0-9]{4,12}$"),
            password: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!@#\$%\^&\*])(?=.{6,12})")
        }
        return regExps[inputField.name].test(inputField.value);
    }
    //Check if both fields are equal, not empty and the password is valid
    function repeatPasswordValidation() {
        const password = $(".sign-up-form input[name=password]");
        const repwd = $(".sign-up-form input[name=repwd]");
        return (
            $(password).val() === $(repwd).val() &&
            $(password).val().length > 0 &&
            !errors.password
        )
    }
    //Validates the required input fields
    // function validate(inputField, text) {
    //     let validationBox = $(inputField).parent().next();
    //     $(inputField).append(`<div>${text}</div>`)
    //     //If any text is show then the field is invalid.
    //     //requiredInputFields[$(inputField).prop('name')] = !showOrHideText(validationBox, text);
    // }
    //Show or hide validation text
    // function showOrHideText(validationBox, text) {
    //     if (text !== '') {
    //         $(validationBox).text(text);
    //         $(validationBox).show();
    //         return true;
    //     } else {
    //         $(validationBox).text('');
    //         $(validationBox).hide();
    //         return false;
    //     }
    // }


    // function inputFieldsCheck(inputField) {
    //     let terms = $(inputField).find(".checkbox-container input[type=checkbox]");
    //     let validationBox = $(terms).parent().next();
    //     for (let item in requiredInputFields) {
    //         //console.log(item +" => "+ requiredInputFields[item])  
    //         if (!requiredInputFields[item]) {
    //             return showOrHideText(validationBox, "All fields are required.");
    //         }
    //     }
    //     return showOrHideText(validationBox, "");
    // }

    // function termsValidation() {
    //     let terms = $(".checkbox-container input[type=checkbox]");
    //     let validationBox = $(terms).parent().next();
    //     if (!$(terms).is(':checked')) {
    //         return showOrHideText(validationBox, "You must agree with terms and services.");
    //     } else {
    //         return showOrHideText(validationBox, "");
    //     }
    // }

    // let submitBtns = $('input[type=submit]');

    // function signUpValidation(signUpBtn) {
    //     let signUpForm = $(signUpBtn).closest(".form-container");
    //     //If inputFieldsCheck or termsValidation fails return false;
    //     if (inputFieldsCheck(signUpForm) || termsValidation(signUpForm)) return false;
    //     return true;
    // }

    // //Event Handlers
    // submitBtns.each((key) => {
    //     $(submitBtns[key]).click(e => {
    //         e.preventDefault();

    //         //Do not continue if the first form is not validated correctly;
    //         let signUpBtn = $(submitBtns).first();
    //         if ($(signUpBtn).val() == $(submitBtns[key]).val()) {
    //             if (!signUpValidation(signUpBtn)) return;
    //         }

    //         let currentForm = $(submitBtns[key]).closest(".form-container");
    //         let nextForms = $(currentForm).next();
    //         nextForm(currentForm, nextForms);
    //     });

    //     function nextForm(currentForm, nextForm) {
    //         setTimeout(() => {
    //             $(currentForm).toggleClass('hidden');
    //             $(nextForm).toggleClass('hidden');
    //         }, 1000)

    //         $(currentForm).addClass('animate-out');
    //     }
    // });



    //Show\Hide bonus container
    $("#bonus").click(() => {
        $("#bonus").parent().next().toggleClass("hidden");
    })

    //Redirects
    const domainLink = "http://www.casino.com";
    $("#skip").click(() => {
        window.open(domainLink, "_blank");
    })
    $("#playNow").click(() => {
        window.open(domainLink + "/casino-games/", "_blank");
    })
    $("#promotions").click(() => {
        window.open(domainLink + "/promotions/", "_blank");
    });
})();